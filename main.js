/* ═══════════════════════════════════════════════
   FRANCK MULLER VANGUARD SMURFETTE
   Main JavaScript — GSAP + Lenis + ScrollTrigger
   ═══════════════════════════════════════════════ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────
   LENIS SMOOTH SCROLL
   ────────────────────────────────── */
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
  infinite: false,
  gestureOrientation: 'vertical',
  normalizeWheel: true,
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* ──────────────────────────────────
   HERO ANIMATIONS
   ────────────────────────────────── */
const initHeroAnimations = () => {
  const video = document.querySelector('.bg-video');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta-group');
  const heroTextBg = document.querySelector('.hero-text-bg');
  const nav = document.querySelector('.nav');
  const heroDetails = document.querySelector('.hero-details');

  if (!video) return;

  /* Entrance Timeline */
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  gsap.set(video, { scale: 1.2, opacity: 0 });
  gsap.set(heroTextBg, { scale: 0.5, opacity: 0 });
  gsap.set([heroTitle, heroSubtitle, heroCta], { y: 60, opacity: 0 });
  gsap.set(nav, { y: -100, opacity: 0 });

  tl.to(video, { scale: 1.05, opacity: 1, duration: 2.5 })
    .to(heroTextBg, { scale: 1, opacity: 1, duration: 2 }, '-=1.5')
    .to(heroTitle, { y: 0, opacity: 1, duration: 1.2 }, '-=1.2')
    .to(heroSubtitle, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
    .to(heroCta, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
    .to(nav, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, '-=0.8');

  /* Scroll-driven parallax */
  gsap.to(video, {
    scale: 1,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(heroDetails, {
    y: -150,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(heroTextBg, {
    y: -250,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
};

/* ──────────────────────────────────
   PRODUCT REVEAL ANIMATIONS
   ────────────────────────────────── */
const initProductRevealAnimations = () => {
  const watch = document.querySelector('.product-reveal-watch');
  const title = document.querySelector('.product-reveal-title');
  const subtitle = document.querySelector('.product-reveal-subtitle');
  const cta = document.querySelector('.product-reveal-cta-group');
  const textBg = document.querySelector('.product-reveal-text-bg');
  const details = document.querySelector('.product-reveal-details');

  if (!watch) return;

  /* Entrance animations */
  gsap.from(watch, {
    y: 50,
    opacity: 0,
    rotation: -5,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(title, {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(subtitle, {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(cta, {
    y: 25,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  /* Scroll-driven: watch rotation + zoom */
  gsap.to(watch, {
    rotation: 20,
    scale: 1.3,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  gsap.to(details, {
    y: -150,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(textBg, {
    y: -250,
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
};

/* ──────────────────────────────────
   HERITAGE ANIMATIONS
   ────────────────────────────────── */
const initHeritageAnimations = () => {
  const eyebrow = document.querySelector('.heritage-eyebrow');
  const title = document.querySelector('.heritage-title');
  const divider = document.querySelector('.heritage-divider');
  const bodies = document.querySelectorAll('.heritage-body');
  const link = document.querySelector('.heritage-link');
  const stats = document.querySelectorAll('.heritage-stat');

  if (!title) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.heritage',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(eyebrow, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from(title, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
    .from(divider, { scaleX: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
    .from(bodies, { y: 25, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.5')
    .from(link, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from(stats, { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, '-=0.5');
};

/* ──────────────────────────────────
   ETHOS / COLLECTION ANIMATIONS
   ────────────────────────────────── */
const initEthosAnimations = () => {
  /* Background parallax */
  const bgImgs = document.querySelectorAll('.ethos-bg-img');
  bgImgs.forEach((img) => {
    gsap.to(img, {
      scale: 1.1,
      yPercent: 10,
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  /* Entrance animation for active variant */
  const activeText = document.querySelector('.ethos-main.active .ethos-text-side');
  const activeWatch = document.querySelector('.ethos-main.active .ethos-watch-img');

  if (activeText) {
    gsap.from(activeText.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  if (activeWatch) {
    gsap.from(activeWatch, {
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  /* Variant switcher */
  const buttons = document.querySelectorAll('.ethos-next-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const currentActive = document.querySelector('.ethos-main.active');
      const currentBg = document.querySelector('.ethos-bg-img.active');
      const nextVariant = document.querySelector(`.variant-${target}`);
      const nextBg = document.querySelector(`.ethos-bg-${target}`);

      if (!currentActive || !nextVariant) return;

      const currentText = currentActive.querySelector('.ethos-text-side');
      const currentWatch = currentActive.querySelector('.ethos-watch-img');
      const nextText = nextVariant.querySelector('.ethos-text-side');
      const nextWatch = nextVariant.querySelector('.ethos-watch-img');

      const tl = gsap.timeline();

      /* Animate current out */
      tl.to(currentText.children, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in',
      })
        .to(
          currentWatch,
          {
            x: -150,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
          },
          '-=0.4'
        )
        .add(() => {
          /* Swap active states */
          currentActive.classList.remove('active');
          nextVariant.classList.add('active');
          currentBg?.classList.remove('active');
          nextBg?.classList.add('active');

          /* Set initial position for incoming */
          gsap.set(nextText.children, { x: 100, opacity: 0 });
          gsap.set(nextWatch, { x: 150, opacity: 0 });
        })
        .to(nextWatch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(
          nextText.children,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.5'
        );
    });
  });
};

/* ──────────────────────────────────
   SHOWCASE ANIMATIONS
   ────────────────────────────────── */
const initShowcaseAnimations = () => {
  const eyebrow = document.querySelector('.showcase-eyebrow');
  const headline = document.querySelector('.showcase-headline');
  const body = document.querySelector('.showcase-body');
  const link = document.querySelector('.showcase-ig-link');

  if (!headline) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.showcase',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(eyebrow, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from(headline, { y: 50, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5')
    .from(body, { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from(link, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
};

/* ──────────────────────────────────
   DISMANTLE / CRAFTSMANSHIP CANVAS
   ────────────────────────────────── */
const initDismantleAnimations = () => {
  const canvas = document.getElementById('dismantle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const frameCount = 152;
  const images = [];
  let loadedCount = 0;

  /* Set canvas size */
  const setCanvasSize = () => {
    canvas.width = 1920;
    canvas.height = 1080;
  };
  setCanvasSize();

  /* Build frame URL */
  const currentFrame = (index) => {
    const num = String(index + 1).padStart(3, '0');
    return `/assets/photo/v3/ezgif-frame-${num}.jpg`;
  };

  /* Preload all frames */
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
      loadedCount++;
      if (loadedCount === frameCount) {
        renderFrame(0);
      }
    };
    images.push(img);
  }

  /* Render a specific frame */
  const renderFrame = (index) => {
    if (!images[index] || !images[index].complete) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[index];
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    /* Cover fit */
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh);
  };

  /* GSAP scroll-driven frame scrubbing */
  const frameObj = { frame: 0 };
  gsap.to(frameObj, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '.dismantle',
      start: 'top 40%',
      end: 'bottom bottom',
      scrub: 0.5,
    },
    onUpdate: () => {
      renderFrame(Math.round(frameObj.frame));
    },
  });

  /* Header slide-out */
  const header = document.querySelector('.dismantle-header');
  if (header) {
    gsap.to(header, {
      x: -150,
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.dismantle',
        start: 'top 45%',
        end: 'top 10%',
        scrub: 1,
      },
    });
  }
};

/* ──────────────────────────────────
   NAV SCROLL HIDE/SHOW
   ────────────────────────────────── */
const initNavScroll = () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;
  const threshold = 50;

  lenis.on('scroll', ({ scroll }) => {
    if (scroll > lastScroll && scroll > threshold) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = scroll;
  });
};

/* ──────────────────────────────────
   MODAL
   ────────────────────────────────── */
const initModal = () => {
  const modal = document.getElementById('reserve-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtns = document.querySelectorAll('.open-reserve-modal');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);

  /* Close on overlay click */
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  /* Close on Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  /* Smooth-scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, { offset: -72 });
      }
    });
  });
};

/* ──────────────────────────────────
   FOOTER ANIMATION
   ────────────────────────────────── */
const initFooterAnimations = () => {
  const cols = document.querySelectorAll('.footer-grid > div');
  if (!cols.length) return;

  gsap.from(cols, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

/* ──────────────────────────────────
   INIT ALL
   ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initProductRevealAnimations();
  initHeritageAnimations();
  initEthosAnimations();
  initShowcaseAnimations();
  initDismantleAnimations();
  initNavScroll();
  initModal();
  initFooterAnimations();
});
