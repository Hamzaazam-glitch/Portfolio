import { FLAGSHIP_PROJECTS, SUPPORTING_PROJECTS } from '../config/projectsData.js';

function isValidProjectLink(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (
    !trimmed ||
    trimmed.toUpperCase().startsWith('TODO') ||
    trimmed === '#' ||
    trimmed.toLowerCase() === 'null' ||
    trimmed.toLowerCase() === 'undefined'
  ) {
    return false;
  }
  return trimmed.startsWith('http://') || trimmed.startsWith('https://');
}

export function renderProjectsShowcase(containerId, onOpenModal) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="flagship-list">
      ${FLAGSHIP_PROJECTS.map((project) => {
        const browserBarUrl = isValidProjectLink(project.demo) ? project.demo : '';
        return `
        <article
          class="project-showcase-row reveal"
          data-project-id="${project.id}"
          id="project-${project.id}"
        >
          <div class="project-header-meta">
            <div class="project-number-badge font-mono">${project.number}</div>
            <div class="project-meta-pills">
              <span class="pill-category font-mono">${project.category}</span>
              <span class="pill-badge font-mono">${project.badge}</span>
              <span class="pill-status font-mono"><span class="dot-live"></span> ${project.status}</span>
            </div>
          </div>

          <h3 class="project-main-title">${project.title}</h3>
          <p class="project-summary-text">${project.headline}</p>

          <!-- Simulated Browser Window Frame -->
          <div class="browser-frame-container" data-project-id="${project.id}">
            <div class="browser-chrome-bar">
              <div class="browser-window-dots">
                <span class="b-dot b-dot-red"></span>
                <span class="b-dot b-dot-yellow"></span>
                <span class="b-dot b-dot-green"></span>
              </div>
              <div class="browser-nav-icons">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
              </div>
              <div class="browser-address-bar font-mono">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" class="lock-icon"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span class="browser-url-text">${browserBarUrl}</span>
              </div>
              <div class="browser-actions-right">
                <button type="button" class="btn-open-modal-icon" data-project-id="${project.id}" title="Deep-Dive Architecture & Case Study">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </button>
              </div>
            </div>

            <!-- Hover-Scroll Viewport Container -->
            <div class="browser-viewport" data-project-id="${project.id}">
              <div class="browser-scroll-canvas">
                <img src="${project.image}" alt="${project.alt}" loading="lazy" />
              </div>
              <div class="browser-hover-hint font-mono">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                <span>HOVER TO INSPECT DASHBOARD</span>
              </div>
            </div>
          </div>

          <!-- Project Specs & Engineering Pipeline -->
          <div class="project-specs-grid">
            <div class="spec-block">
              <span class="spec-label font-mono">// THE PROBLEM</span>
              <p>${project.problem}</p>
            </div>
            <div class="spec-block">
              <span class="spec-label font-mono">// AI MECHANISM</span>
              <p>${project.mechanism}</p>
            </div>
          </div>

          <div class="project-bottom-bar">
            <div class="project-tech-chips font-mono">
              ${project.engineering.map((tech) => `<span class="tech-chip">${tech}</span>`).join('')}
            </div>
            <div class="project-cta-group">
              <button
                type="button"
                class="btn btn-primary btn-case-study"
                data-project-id="${project.id}"
              >
                Deep-Dive Case Study & Architecture
              </button>
              ${isValidProjectLink(project.demo) ? `
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary font-mono btn-ext-link">
                  Live Demo ↗
                </a>
              ` : ''}
              ${isValidProjectLink(project.github) ? `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary font-mono btn-ext-link">
                  GitHub ↗
                </a>
              ` : ''}
            </div>
          </div>
        </article>
      `;
      }).join('')}
    </div>

    <!-- Supporting Platforms Secondary Grid -->
    <div class="supporting-section">
      <div class="supporting-heading reveal">
        <p class="eyebrow font-mono">// DEPLOYED PLATFORMS</p>
        <h3>Additional Production & Automation Deployments</h3>
        <p class="text-muted">Targeted enterprise automations, specialized data extraction engines, and operational intelligence assistants.</p>
      </div>
      <div class="supporting-grid">
        ${SUPPORTING_PROJECTS.map((sp) => `
          <div class="supporting-card glass-card reveal">
            <span class="supporting-category font-mono">${sp.category}</span>
            <h4>${sp.title}</h4>
            <p class="supporting-desc">${sp.description}</p>
            <div class="supporting-impact font-mono">
              <strong>Outcome:</strong> ${sp.impact}
            </div>
            <div class="supporting-stack font-mono">
              ${sp.stack.map((item) => `<span class="tech-chip-sm">${item}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach modal trigger listeners
  container.querySelectorAll('.btn-case-study, .btn-open-modal-icon, .browser-viewport').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      // Don't trigger if user was just clicking to inspect
      const projectId = trigger.getAttribute('data-project-id');
      if (projectId && typeof onOpenModal === 'function') {
        onOpenModal(projectId);
      }
    });
  });
}
