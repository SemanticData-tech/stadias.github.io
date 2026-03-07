/*
 * animations.js — Scroll reveal (IntersectionObserver) + stat counters
 * Stadias.in
 */

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// Animated stat counters
function animateCounters() {
  document.querySelectorAll('.big-num').forEach(el => {
    const match = el.textContent.match(/(\d+)/);
    if (!match) return;
    const target = parseInt(match[1]);
    let count = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      count = Math.min(count + step, target);
      el.innerHTML = el.innerHTML.replace(/\d+/, Math.floor(count));
      if (count >= target) clearInterval(interval);
    }, 20);
  });
}

const statsSection = document.querySelector('.stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      statsObserver.disconnect();
    }
  }, { threshold: 0.3 });
  statsObserver.observe(statsSection);
}
