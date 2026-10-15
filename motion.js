/* THE ROYAL BEAUTY — progressive enhancement for soft text reveals. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) return;

  // Intentionally exclude dynamic service cards, popups, the navigation and form controls.
  const selectors = [
    'main h1', 'main h2', 'main .eyebrow',
    'main .hero-copy > p', 'main .hero-content > p',
    'main .section-head > p', 'main .section-heading-split > p',
    'main .page-intro-copy > p', 'main .closing-inner > p',
    'main .home-bridal-grid > div > p',
    'main .discovery-card h3', 'main .benefit-card h3',
    'main .signature-mini-copy h3', 'main .how-grid h3',
    'main .beauty-split h3'
  ];
  const candidates = [...document.querySelectorAll(selectors.join(','))]
    .filter(el => el.getClientRects().length && !el.closest('[hidden], details:not([open]), .cart-drawer'));
  if (!candidates.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('royal-visible');
      observer.unobserve(entry.target); // Play once, never repeat while scrolling up/down.
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

  candidates.forEach(el => {
    el.classList.add('royal-reveal');
    if (/^H[12]$/.test(el.tagName)) el.classList.add('royal-title');
    if (el.closest('.hero, .page-intro, .closing-section')) {
      const group = el.closest('.hero, .page-intro, .closing-section');
      const index = [...group.querySelectorAll('h1, h2, .eyebrow, .hero-copy > p, .hero-content > p, .page-intro-copy > p, .closing-inner > p')].indexOf(el);
      el.style.setProperty('--royal-delay', Math.max(0, Math.min(index, 5)) * 95 + 'ms');
    }
    observer.observe(el);
  });
  document.body.classList.add('motion-ready');

  // Browser back/forward cache restoration must never leave hidden text.
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    candidates.forEach(el => el.classList.add('royal-visible'));
  });
})();
