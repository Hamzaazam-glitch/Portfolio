import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generate() {
  const publicDir = path.resolve('public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png (180x180)');

  // 2. favicon.ico (32x32 valid PNG-in-ICO format)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(22);
  // Header: Reserved (0), Type (1 = ICO), Count (1)
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(1, 4);
  // Directory entry
  icoHeader.writeUInt8(32, 6); // Width
  icoHeader.writeUInt8(32, 7); // Height
  icoHeader.writeUInt8(0, 8);  // Palette
  icoHeader.writeUInt8(0, 9);  // Reserved
  icoHeader.writeUInt16LE(1, 10); // Color planes
  icoHeader.writeUInt16LE(32, 12); // Bits per pixel
  icoHeader.writeUInt32LE(png32.length, 14); // Image data size
  icoHeader.writeUInt32LE(22, 18); // Offset
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.concat([icoHeader, png32]));
  console.log('Generated favicon.ico (32x32)');

  // 3. og-image.png (1200x630)
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0e1322"/>
        <stop offset="50%" stop-color="#07090e"/>
        <stop offset="100%" stop-color="#05060a"/>
      </linearGradient>
      <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffb454"/>
        <stop offset="100%" stop-color="#ffc478"/>
      </linearGradient>
      <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#5eead4"/>
        <stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Canvas Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>

    <!-- Subtle Ambient Glow Orbs -->
    <circle cx="1050" cy="150" r="280" fill="#ffb454" opacity="0.07" filter="blur(60px)"/>
    <circle cx="150" cy="500" r="240" fill="#5eead4" opacity="0.05" filter="blur(60px)"/>

    <!-- Outer Card Border -->
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2"/>
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="rgba(255, 180, 84, 0.15)" stroke-width="1"/>

    <!-- Top Navigation Telemetry -->
    <text x="90" y="115" font-family="monospace, Courier" font-size="14" letter-spacing="3" fill="#ffb454" font-weight="600">// AI SYSTEMS ARCHITECT &amp; PRODUCTION ML</text>
    <rect x="980" y="90" width="130" height="34" rx="17" fill="rgba(255, 180, 84, 0.1)" stroke="rgba(255, 180, 84, 0.3)" stroke-width="1"/>
    <circle cx="1002" cy="107" r="4" fill="#5eead4"/>
    <text x="1016" y="112" font-family="monospace, Courier" font-size="12" font-weight="700" fill="#ffb454" letter-spacing="1.5">MHA // AI</text>

    <!-- Hero Title Block -->
    <text x="90" y="240" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff" letter-spacing="-1.5">Hamza Azam</text>
    <text x="90" y="315" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="38" font-weight="600" fill="url(#cyanAccent)" letter-spacing="-0.5">AI Automation Engineer</text>

    <!-- Description Paragraph -->
    <text x="90" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" fill="#8e9bb0" font-weight="400">Autonomous Multi-Agent Systems • Biometric Computer Vision • Enterprise SAP Automation • Production RAG</text>

    <!-- Feature Pillars Strip -->
    <rect x="90" y="445" width="280" height="70" rx="12" fill="rgba(13, 16, 26, 0.85)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
    <text x="115" y="475" font-family="monospace, Courier" font-size="11" fill="#ffb454">// MULTI-AGENT</text>
    <text x="115" y="500" font-family="-apple-system, sans-serif" font-size="16" font-weight="600" fill="#f1f3f9">LangGraph &amp; Celery</text>

    <rect x="390" y="445" width="280" height="70" rx="12" fill="rgba(13, 16, 26, 0.85)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
    <text x="415" y="475" font-family="monospace, Courier" font-size="11" fill="#5eead4">// VECTOR RETRIEVAL</text>
    <text x="415" y="500" font-family="-apple-system, sans-serif" font-size="16" font-weight="600" fill="#f1f3f9">Supabase pgvector</text>

    <rect x="690" y="445" width="280" height="70" rx="12" fill="rgba(13, 16, 26, 0.85)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
    <text x="715" y="475" font-family="monospace, Courier" font-size="11" fill="#ffb454">// VISION AUTOMATION</text>
    <text x="715" y="500" font-family="-apple-system, sans-serif" font-size="16" font-weight="600" fill="#f1f3f9">ArcFace &amp; GPT-4V</text>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
