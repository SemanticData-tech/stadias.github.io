/*
 * parallax.js — Parallax scroll effects (disabled on mobile/touch for performance)
 * Stadias.in
 */

const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice && window.innerWidth > 768) {
  const heroBg = document.getElementById('heroBg');
  const pBg1   = document.getElementById('parallaxBg1');
  const pBg2   = document.getElementById('parallaxBg2');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (heroBg) heroBg.style.transform = `translateY(${sy * 0.4}px)`;
    if (pBg1) {
      const rect = pBg1.parentElement.getBoundingClientRect();
      pBg1.style.transform = `translateY(${rect.top * 0.3}px)`;
    }
    if (pBg2) {
      const rect = pBg2.parentElement.getBoundingClientRect();
      pBg2.style.transform = `translateY(${rect.top * 0.25}px)`;
    }
  });
}
