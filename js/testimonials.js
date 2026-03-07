/*
 * testimonials.js — Testimonial carousel with auto-cycle
 * Stadias.in
 */

const testimonials = [
  {
    text: '"Stadias installed our 7-a-side football turf within the promised timeline and the quality is outstanding. Our players love the surface — it\'s consistent, safe, and plays beautifully in all weather."',
    name: 'Rajesh Mehta',
    role: 'Director · Gallant Sports Academy, Mumbai'
  },
  {
    text: '"We needed an FIH-certified hockey pitch for our school and Stadias delivered exactly that. Their team managed every detail from civil work to infill and line marking. Exceptional service."',
    name: 'Priya Subramaniam',
    role: 'Sports Director · Altius Sports School, Bengaluru'
  },
  {
    text: '"Stadias built our 400m synthetic athletic track on schedule and within budget. The surface quality meets international standards and our athletes have seen a measurable improvement in performance."',
    name: 'Coach Avinash Patil',
    role: 'Head Coach · Meckavo Sports Academy, Pune'
  }
];

let activeT = 0;

function changeTestimonial(idx) {
  activeT = idx;
  const t    = testimonials[idx];
  const text = document.getElementById('testimonialText');
  if (!text) return;
  text.style.opacity = '0';
  setTimeout(() => {
    text.textContent = t.text;
    document.getElementById('authorName').textContent = t.name;
    document.getElementById('authorRole').textContent = t.role;
    text.style.opacity = '1';
  }, 300);
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

const testimonialText = document.getElementById('testimonialText');
if (testimonialText) {
  testimonialText.style.transition = 'opacity 0.3s';
  setInterval(() => changeTestimonial((activeT + 1) % testimonials.length), 5000);
}
