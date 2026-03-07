/*
 * nav.js — Navbar scroll effect, hamburger menu, mobile nav
 * Stadias.in
 */

// Navbar scroll state
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile nav toggle
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNav');
  const burger = document.getElementById('hamburger');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  burger.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});
