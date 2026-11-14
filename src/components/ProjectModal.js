import { FLAGSHIP_PROJECTS } from '../config/projectsData.js';

export class ProjectModal {
  constructor() {
    this.modal = document.getElementById('project-modal');
    this.closeBtn = this.modal?.querySelector('.modal-close');
    this.previouslyFocusedElement = null;

    this.init();
  }

  init() {
    if (!this.modal) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
      if (e.key === 'Tab' && this.isOpen()) {
        this.handleFocusTrap(e);
      }
    });
  }

  isOpen() {
    return this.modal && this.modal.classList.contains('open');
  }

  open(projectId) {
    const project = FLAGSHIP_PROJECTS.find((p) => p.id === projectId);
    if (!project || !this.modal) return;

    this.previouslyFocusedElement = document.activeElement;

    // Fill Modal Data safely
    const titleEl = document.getElementById('modal-title');
    const labelEl = document.getElementById('modal-label');
    const summaryEl = document.getElementById('modal-summary');
    const problemEl = document.getElementById('modal-problem');
    const impactEl = document.getElementById('modal-impact');
    const mechanismEl = document.getElementById('modal-mechanism');
    const previewEl = document.getElementById('modal-preview');
    const stackEl = document.getElementById('modal-stack');
    const archFlowEl = document.getElementById('modal-arch-flow');

    if (titleEl) titleEl.textContent = project.title;
    if (labelEl) labelEl.textContent = `${project.number} // ${project.category}`;
    if (summaryEl) summaryEl.textContent = project.headline;
    if (problemEl) problemEl.textContent = project.problem;
    if (impactEl) impactEl.textContent = project.impact;
    if (mechanismEl) mechanismEl.textContent = project.mechanism;

    if (previewEl) {
      previewEl.innerHTML = `<img src="${project.image}" alt="${project.alt}" loading="lazy" />`;
    }

    if (stackEl) {
      stackEl.innerHTML = project.engineering.map((tech) => `<span>${tech}</span>`).join('');
    }

    if (archFlowEl && project.architecture) {
      archFlowEl.innerHTML = `
        <div class="arch-pipeline">
          <div class="arch-stage arch-input">
            <span class="stage-type">Input</span>
            <strong>${project.architecture.input}</strong>
          </div>
          <div class="arch-connector">↓</div>
          <div class="arch-steps">
            ${project.architecture.stages.map((stage, idx) => `
              <div class="arch-step">
                <span class="step-num">0${idx + 1}</span>
                <div class="step-meta">
                  <strong>${stage.name}</strong>
                  <p>${stage.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="arch-connector">↓</div>
          <div class="arch-stage arch-output">
            <span class="stage-type">Business Output</span>
            <strong>${project.architecture.output}</strong>
          </div>
        </div>
      `;
    }

    // Render external links if valid
    const actionsEl = document.getElementById('modal-actions');
    if (actionsEl) {
      const links = [];
      const isValidLink = (url) => {
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
      };

      if (isValidLink(project.demo)) {
        links.push(`
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary font-mono modal-action-btn">
            Live Demo ↗
          </a>
        `);
      }
      if (isValidLink(project.github)) {
        links.push(`
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary font-mono modal-action-btn">
            GitHub Repository ↗
          </a>
        `);
      }

      if (links.length > 0) {
        actionsEl.innerHTML = `<div class="modal-links-row">${links.join('')}</div>`;
        actionsEl.style.display = 'block';
      } else {
        actionsEl.innerHTML = '';
        actionsEl.style.display = 'none';
      }
    }

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      this.closeBtn?.focus();
    }, 50);
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  handleFocusTrap(e) {
    const focusable = this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}
