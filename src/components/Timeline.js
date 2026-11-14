import { CAREER_EXPERIENCE, EDUCATION_CREDENTIALS } from '../config/experienceData.js';

export function renderExperienceTimeline(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const milestones = [
    { year: '2024', title: 'SMIU & CodeAlpha', sub: 'Software Engineering & Data Science Intern' },
    { year: '2025', title: 'Elevvo Pathways', sub: 'Machine Learning Intern (Remote, 4–5 mos)' },
    { year: '2026', title: 'Morphelabs', sub: 'AI Automation Intern & Multi-Agent Systems' }
  ];

  container.innerHTML = `
    <!-- Horizontal Milestone Track -->
    <div class="milestone-track-container glass-card reveal">
      <div class="milestone-track-header font-mono">
        <span class="text-accent-cyan">// CAREER & LEARNING TRAJECTORY</span>
        <span class="text-muted">MILESTONES OVERVIEW</span>
      </div>
      <div class="milestone-track-line">
        <div class="milestone-track-wire"></div>
        <div class="milestone-nodes-grid">
          ${milestones.map((m) => `
            <div class="milestone-node">
              <div class="node-dot-wrap">
                <span class="node-dot"></span>
                <span class="node-pulse"></span>
              </div>
              <div class="node-info font-mono">
                <div class="node-year text-accent-gold">${m.year}</div>
                <div class="node-title">${m.title}</div>
                <div class="node-sub text-muted">${m.sub}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Detailed Vertical Trajectory Stream -->
    <div class="timeline-stream">
      ${CAREER_EXPERIENCE.map((exp, idx) => `
        <article class="timeline-node reveal" data-index="${idx}">
          <div class="timeline-marker">
            <span class="timeline-dot"></span>
            <span class="timeline-line"></span>
          </div>
          <div class="timeline-content glass-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <span class="timeline-badge font-mono">${exp.badge}</span>
                <h3 class="timeline-role">${exp.role}</h3>
                <h4 class="company-name text-muted font-mono">${exp.company}</h4>
              </div>
              <span class="timeline-period font-mono">${exp.period}</span>
            </div>
            <p class="timeline-lead">${exp.description}</p>
            <ul class="timeline-points">
              ${exp.highlights.map((h) => `<li>${h}</li>`).join('')}
            </ul>
            <div class="timeline-stack font-mono">
              ${exp.stack.map((item) => `<span class="tech-chip-sm">${item}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

export function renderCredentials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="credentials-layout">
      <div class="credentials-col">
        <div class="credential-heading reveal">
          <p class="eyebrow font-mono">// ACADEMIC FOUNDATION</p>
          <h3>Software Engineering Education</h3>
        </div>
        ${EDUCATION_CREDENTIALS.education.map((edu) => `
          <div class="credential-card glass-card reveal">
            <div class="card-top">
              <span class="credential-badge font-mono">${edu.badge}</span>
              <span class="credential-period font-mono">${edu.period}</span>
            </div>
            <h4>${edu.degree}</h4>
            <p class="inst-name text-accent-gold">${edu.institution}</p>
            <p class="focus-text">${edu.focus}</p>
          </div>
        `).join('')}
      </div>

      <div class="credentials-col">
        <div class="credential-heading reveal">
          <p class="eyebrow font-mono">// VERIFIED CERTIFICATIONS</p>
          <h3>Professional Accreditations</h3>
        </div>
        <div class="cert-stack">
          ${EDUCATION_CREDENTIALS.certifications.map((cert) => `
            <div class="cert-item glass-card reveal">
              <div class="cert-status-row">
                <span class="cert-verified-dot"></span>
                <span class="cert-status font-mono">${cert.status}</span>
              </div>
              <h4>${cert.title}</h4>
              <p class="cert-issuer font-mono text-accent-cyan">${cert.issuer}</p>
              <p class="cert-focus text-muted">${cert.focus}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
