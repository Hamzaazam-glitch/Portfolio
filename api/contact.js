// Serverless API Handler: POST /api/contact
// Persists inquiries to Supabase PostgreSQL ('contact_submissions')
// and dispatches email notifications via Resend API.

export default async function handler(req, res) {
  // Enforce POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed. Please use POST.`
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, message: 'A valid email is required.' });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Subject is required.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Message must be at least 10 characters.' });
    }

    // Sanitize inputs
    const sanitize = (str) => String(str).replace(/[<>]/g, '').trim();
    const cleanName = sanitize(name).slice(0, 100);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 120);
    const cleanSubject = sanitize(subject).slice(0, 150);
    const cleanMessage = sanitize(message).slice(0, 3000);

    const submissionRecord = {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      status: 'unread',
      created_at: new Date().toISOString()
    };

    let supabaseSaved = false;
    let resendDispatched = false;

    // 1. Supabase PostgreSQL Integration
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;
    const tableName = process.env.SUPABASE_TABLE || 'contact_messages';

    if (supabaseUrl && supabaseKey) {
      try {
        const sbResponse = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(submissionRecord)
        });

        if (sbResponse.ok) {
          supabaseSaved = true;
        } else {
          console.warn('[Contact API] Supabase submission non-200 response:', sbResponse.status);
        }
      } catch (sbErr) {
        console.warn('[Contact API] Supabase request error:', sbErr.message);
      }
    } else {
      console.log('[Contact API Dev Mode] Supabase credentials not configured in .env. Logging record locally.');
    }

    // 2. Resend Email Notification Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'hamzaazam2076@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    if (resendApiKey) {
      try {
        const emailPayload = {
          from: fromEmail,
          to: [recipientEmail],
          subject: `[Portfolio Inquiry] ${cleanSubject} — from ${cleanName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #07090e; color: #f1f3f9; padding: 24px; border-radius: 12px; border: 1px solid #222;">
              <h2 style="color: #ffb454; margin-top: 0;">New AI Engineering Inquiry</h2>
              <p style="color: #8e9bb0; font-size: 13px;">Received via portfolio contact form at ${submissionRecord.created_at}</p>
              <hr style="border: none; border-top: 1px solid #333; margin: 16px 0;" />
              <p><strong>Sender:</strong> ${cleanName}</p>
              <p><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #5eead4;">${cleanEmail}</a></p>
              <p><strong>Subject:</strong> ${cleanSubject}</p>
              <div style="background: #0d101a; padding: 16px; border-radius: 8px; border-left: 3px solid #ffb454; margin-top: 16px;">
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${cleanMessage}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #333; margin: 24px 0 16px 0;" />
              <p style="font-size: 11px; color: #666;">Hamza Azam AI Engineer Portfolio Telemetry</p>
            </div>
          `
        };

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });

        if (resendRes.ok) {
          resendDispatched = true;
        } else {
          console.warn('[Contact API] Resend dispatch non-200 response:', resendRes.status);
        }
      } catch (resendErr) {
        console.warn('[Contact API] Resend request error:', resendErr.message);
      }
    } else {
      console.log('[Contact API Dev Mode] Resend API key not configured in .env. Notification logged locally.');
    }

    // Controlled response to client
    const hasCredentials = Boolean((supabaseUrl && supabaseKey) || resendApiKey);
    if (hasCredentials && !supabaseSaved && !resendDispatched) {
      return res.status(502).json({
        success: false,
        message: 'Transmission failed to persist or deliver. Please email hamzaazam2076@gmail.com directly.'
      });
    }

    const isDevMock = !supabaseSaved && !resendDispatched;
    const messageResponse = isDevMock
      ? 'Inquiry received. (Development mode: credentials pending in .env).'
      : 'Inquiry securely dispatched to Hamza. Thank you!';

    return res.status(200).json({
      success: true,
      message: messageResponse,
      timestamp: submissionRecord.created_at
    });
  } catch (err) {
    console.error('[Contact API Fatal Error]', err);
    // Never leak stack trace or internal details
    return res.status(500).json({
      success: false,
      message: 'An internal transmission error occurred. Please connect directly via email.'
    });
  }
}
