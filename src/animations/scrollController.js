import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollController {
  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.initLenis();
    this.initAnimations();
    this.initCounters();
    this.initMagneticButtons();
  }

  initLenis() {
    if (this.prefersReducedMotion) return;

    this.lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  initAnimations() {
    if (this.prefersReducedMotion) {
      // Reveal all items directly
      document.querySelectorAll('.reveal').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Curtain section stack effect
    const chapters = gsap.utils.toArray('header.hero, section.chapter');
    chapters.forEach((chapter, i) => {
      chapter.style.zIndex = i + 1;
      if (i < chapters.length - 1) {
        const next = chapters[i + 1];
        gsap.to(chapter, {
          scale: 0.94,
          opacity: 0.45,
          borderRadius: '32px',
          transformOrigin: 'center top',
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: 'top bottom',
            end: 'top top',
            scrub: 0.5
          }
        });
      }
    });

    // Reveal items when scrolled into view
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (this.prefersReducedMotion) {
      counters.forEach((counter) => {
        counter.textContent = counter.getAttribute('data-counter') || '0';
      });
      return;
    }

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute('data-counter'));
      let current = 0;
      const duration = 1500;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        current = Math.floor(progress * target);
        counter.textContent = current.toString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target.toString();
        }
      };

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        once: true,
        onEnter: () => requestAnimationFrame(step)
      });
    });
  }

  initMagneticButtons() {
    if (this.prefersReducedMotion) return;

    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }
}
