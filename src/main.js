import './styles/main.css';
import { BootLoader } from './components/BootLoader.js';
import { NeuralScene } from './3d/NeuralScene.js';
import { ScrollController } from './animations/scrollController.js';
import { ProjectModal } from './components/ProjectModal.js';
import { renderProjectsShowcase } from './components/ProjectShowcase.js';
import { renderNowTerminal } from './components/NowTerminal.js';
import { renderTechMatrix } from './components/TechMatrix.js';
import { renderExperienceTimeline, renderCredentials } from './components/Timeline.js';
import { renderContactForm } from './components/ContactForm.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize System Boot Loader
  new BootLoader(() => {
    // Reveal callbacks or telemetry triggers if needed
  });

  // 2. Initialize Accessible Project Modal
  const modal = new ProjectModal();

  // 3. Render Dynamic Application Components
  renderProjectsShowcase('projects-container', (projectId) => {
    modal.open(projectId);
  });

  renderNowTerminal('now-terminal-container');
  renderTechMatrix('tech-matrix-container');
  renderExperienceTimeline('experience-container');
  renderCredentials('credentials-container');
  renderContactForm('contact-container');

  // 4. Mount Three.js WebGL Neural Core
  const visualContainer = document.querySelector('.hero-visual-3d');
  if (visualContainer) {
    try {
      new NeuralScene(visualContainer);
    } catch (err) {
      console.warn('WebGL Neural Scene fallback activated:', err);
    }
  }

  // 5. Initialize Lenis Inertia & GSAP ScrollTrigger
  new ScrollController();

  // 6. Interactive Cursor Glow Parallax
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 7. Accessible Smooth Anchor Navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
