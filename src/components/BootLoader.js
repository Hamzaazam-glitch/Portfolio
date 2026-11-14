import { gsap } from 'gsap';

export class BootLoader {
  constructor(onComplete) {
    this.onComplete = onComplete;
    this.hasSkipped = false;
    this.init();
  }

  init() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
      return;
    }

    try {
      if (sessionStorage.getItem('mha-boot-skip') === 'true') {
        this.hasSkipped = true;
      }
    } catch {
      this.hasSkipped = false;
    }

    this.render();

    if (this.hasSkipped) {
      this.fastComplete();
    } else {
      this.runSequence();
    }
  }

  render() {
    this.cover = document.createElement('div');
    this.cover.id = 'boot-cover';
    this.cover.setAttribute('aria-label', 'System Boot Initialization');
    this.cover.setAttribute('role', 'status');
    this.cover.innerHTML = `
      <div class="boot-curtain boot-curtain-top"></div>
      <div class="boot-curtain boot-curtain-bottom"></div>
      <div class="boot-content">
        <div class="boot-brand">
          <span class="boot-tag">SYSTEM BOOT // V2.026</span>
          <span class="boot-identity">MUHAMMAD HAMZA AZAM</span>
          <span class="boot-sub">AI AUTOMATION ENGINEER</span>
        </div>
        <div class="boot-counter-wrap">
          <div class="boot-number" id="boot-number">0<span class="boot-pct">%</span></div>
          <div class="boot-bar-track">
            <div class="boot-bar-fill" id="boot-bar-fill"></div>
          </div>
          <div class="boot-status" id="boot-status">INITIALIZING RUNTIME</div>
        </div>
        <div class="boot-footer">
          <span>LAT 24.8607° N // LON 67.0011° E — KARACHI, PK</span>
          <span class="boot-pulse"></span>
        </div>
      </div>
    `;
    document.body.prepend(this.cover);
  }

  runSequence() {
    const numberEl = document.getElementById('boot-number');
    const fillEl = document.getElementById('boot-bar-fill');
    const statusEl = document.getElementById('boot-status');

    const stages = [
      { threshold: 0, text: 'INITIALIZING RUNTIME' },
      { threshold: 24, text: 'CONFIGURING THREE.JS WEBGL NEURAL ENGINE' },
      { threshold: 52, text: 'MOUNTING BIOMETRIC & VECTOR PIPELINES' },
      { threshold: 76, text: 'SYNCHRONIZING MULTI-AGENT STATE MACHINES' },
      { threshold: 92, text: 'SYSTEM VERIFICATION 100% PASS' },
      { threshold: 100, text: 'AI SYSTEMS OPERATIONAL' }
    ];

    const progressObj = { value: 0 };
    const duration = 1.6;

    gsap.to(progressObj, {
      value: 100,
      duration: duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const val = Math.floor(progressObj.value);
        if (numberEl) {
          numberEl.innerHTML = `${val}<span class="boot-pct">%</span>`;
        }
        if (fillEl) {
          fillEl.style.width = `${val}%`;
        }

        // Update status text based on current progress
        for (let i = stages.length - 1; i >= 0; i--) {
          if (val >= stages[i].threshold) {
            if (statusEl && statusEl.textContent !== stages[i].text) {
              statusEl.textContent = stages[i].text;
            }
            break;
          }
        }
      },
      onComplete: () => {
        try {
          sessionStorage.setItem('mha-boot-skip', 'true');
        } catch {}
        this.animateExit();
      }
    });
  }

  fastComplete() {
    const fillEl = document.getElementById('boot-bar-fill');
    const numberEl = document.getElementById('boot-number');
    const statusEl = document.getElementById('boot-status');
    if (fillEl) fillEl.style.width = '100%';
    if (numberEl) numberEl.innerHTML = `100<span class="boot-pct">%</span>`;
    if (statusEl) statusEl.textContent = 'AI SYSTEMS OPERATIONAL';

    gsap.delayedCall(0.15, () => {
      this.animateExit(0.4);
    });
  }

  animateExit(speed = 0.8) {
    const content = this.cover.querySelector('.boot-content');
    const topCurtain = this.cover.querySelector('.boot-curtain-top');
    const bottomCurtain = this.cover.querySelector('.boot-curtain-bottom');

    const tl = gsap.timeline({
      onComplete: () => {
        if (this.cover && this.cover.parentNode) {
          this.cover.parentNode.removeChild(this.cover);
        }
        if (typeof this.onComplete === 'function') {
          this.onComplete();
        }
      }
    });

    tl.to(content, {
      opacity: 0,
      y: -20,
      duration: speed * 0.4,
      ease: 'power2.in'
    })
      .to(topCurtain, {
        yPercent: -100,
        duration: speed,
        ease: 'power3.inOut'
      }, '-=0.1')
      .to(bottomCurtain, {
        yPercent: 100,
        duration: speed,
        ease: 'power3.inOut'
      }, '<');
  }
}
