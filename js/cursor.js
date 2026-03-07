/*
 * cursor.js — Custom cursor (desktop only, auto-disabled on touch devices)
 * Stadias.in
 */

const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    ring.style.transform   = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
  });
} else {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (cursor) cursor.style.display = 'none';
  if (ring)   ring.style.display   = 'none';
  document.body.style.cursor = 'auto';
}
