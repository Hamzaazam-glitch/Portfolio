export function renderContactForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="contact-shell glass-card reveal">
      <div class="contact-header-block">
        <p class="eyebrow font-mono">// DIRECT INQUIRY & CONTACT</p>
        <h2 class="contact-main-heading">Let’s build mission-critical<br/><span class="text-accent-gold">AI systems together.</span></h2>
        <p class="contact-desc">
          Open for full-time AI Engineer, Machine Learning Systems Architect, and Agentic AI roles. Whether you are architecting a multimodal automation pipeline or scaling a vector database, submit an inquiry below or connect directly.
        </p>
      </div>

      <div class="contact-split-grid">
        <!-- Interactive Contact Form -->
        <form id="portfolio-contact-form" class="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="contact-name" class="font-mono">YOUR NAME *</label>
              <input type="text" id="contact-name" name="name" placeholder="e.g. Alex Mercer" required autocomplete="name" />
              <span class="field-error font-mono" id="error-name"></span>
            </div>
            <div class="form-group">
              <label for="contact-email" class="font-mono">WORK EMAIL *</label>
              <input type="email" id="contact-email" name="email" placeholder="alex@company.com" required autocomplete="email" />
              <span class="field-error font-mono" id="error-email"></span>
            </div>
          </div>

          <div class="form-group">
            <label for="contact-subject" class="font-mono">SUBJECT / ROLE *</label>
            <input type="text" id="contact-subject" name="subject" placeholder="AI Engineering Opportunity / Pipeline Project" required />
            <span class="field-error font-mono" id="error-subject"></span>
          </div>

          <div class="form-group">
            <label for="contact-message" class="font-mono">MESSAGE *</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Outline your project scope, technical requirements, or team mission..." required></textarea>
            <span class="field-error font-mono" id="error-message"></span>
          </div>

          <div class="form-feedback-banner font-mono" id="form-feedback" aria-live="polite"></div>

          <button type="submit" id="btn-submit-contact" class="btn btn-primary btn-submit font-mono">
            <span class="btn-text">DISPATCH INQUIRY TO HAMZA</span>
            <span class="btn-spinner" aria-hidden="true"></span>
          </button>
        </form>

        <!-- Direct Channels & Profile Verification -->
        <div class="contact-direct-info">
          <div class="direct-card font-mono">
            <span class="direct-label">// DIRECT EMAIL</span>
            <a href="mailto:hamzaazam2076@gmail.com" class="direct-val text-accent-gold">hamzaazam2076@gmail.com</a>
          </div>

          <div class="direct-card font-mono">
            <span class="direct-label">// LOCATION & AVAILABILITY</span>
            <p class="direct-val">Karachi, Pakistan (PK) • UTC+5</p>
            <span class="direct-sub text-muted">Available for Remote Global & Relocation Roles</span>
          </div>

          <div class="direct-card font-mono">
            <span class="direct-label">// VERIFIED PROFILES</span>
            <div class="direct-links-row">
              <a href="https://github.com/Hamzaazam-glitch" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hamzaaazam" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="/cv.pdf" download="Hamza_Azam_CV.pdf" class="btn btn-secondary btn-sm">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Technical CV
              </a>
            </div>
          </div>

          <div class="direct-card font-mono direct-audit-trail">
            <span class="direct-label">// SUBMISSION SECURITY & AUDIT</span>
            <p class="text-muted text-xs">
              All submissions are cryptographically sanitized, persisted in Supabase PostgreSQL (<code>contact_submissions</code>), and mirrored via Resend. Zero third-party trackers.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach submission logic
  const form = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('btn-submit-contact');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    // Reset errors
    document.querySelectorAll('.field-error').forEach((el) => { el.textContent = ''; });
    feedback.className = 'form-feedback-banner font-mono';
    feedback.textContent = '';

    let hasError = false;

    if (!nameInput.value.trim()) {
      document.getElementById('error-name').textContent = 'Please enter your name.';
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      document.getElementById('error-email').textContent = 'Please enter a valid work email address.';
      hasError = true;
    }

    if (!subjectInput.value.trim()) {
      document.getElementById('error-subject').textContent = 'Please specify a subject.';
      hasError = true;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      document.getElementById('error-message').textContent = 'Please provide a message (minimum 10 characters).';
      hasError = true;
    }

    if (hasError) return;

    // Flight state
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok && result.success) {
        feedback.className = 'form-feedback-banner font-mono is-success';
        feedback.innerHTML = `✓ INQUIRY DISPATCHED: ${result.message || 'Saved to queue and forwarded to Hamza.'}`;
        form.reset();
      } else {
        feedback.className = 'form-feedback-banner font-mono is-error';
        const errorDetail = result.message || 'Transmission could not be processed by server. Please connect directly via email.';
        feedback.innerHTML = `✕ SERVER NOTICE (${response.status}): ${errorDetail}`;
      }
    } catch {
      // True network error / endpoint unreachable
      feedback.className = 'form-feedback-banner font-mono is-error';
      feedback.innerHTML = `✕ NETWORK TRANSMISSION ERROR: Unable to connect to server. Please check your internet connection or email directly at <a href="mailto:hamzaazam2076@gmail.com" class="text-accent-gold">hamzaazam2076@gmail.com</a>.`;
    } finally {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
    }
  });
}
