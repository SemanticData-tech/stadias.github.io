/*
 * testimonials.js — Rotating testimonials
 * Track and Field Infra Pvt. Ltd.
 */

const testimonials = [
  {
    text: '"Track & Field Infra delivered our school\'s athletic track exactly on schedule and within budget. The quality of the surface has been exceptional — our students are thrilled, and the track has transformed our annual sports programme."',
    name: "Principal R. Sharma",
    role: "Principal · Rotary Public School, Mysuru"
  },
  {
    text: '"The team at Track & Field Infra brought real engineering expertise to our project in Manipur. Working in a remote location is always challenging, but they handled logistics brilliantly and delivered a professional-grade ground we are extremely proud of."',
    name: "District Sports Officer",
    role: "Ukhrul District Sports Authority, Manipur"
  },
  {
    text: '"From site assessment to final handover, the entire experience was smooth and professional. Their transparent pricing and dedicated project manager made all the difference. We now have a multi-sport facility that our children use every single day."',
    name: "Managing Director",
    role: "Play Haus Sports Facility, Rohini, Delhi"
  }
];

let current = 0;

function changeTestimonial(idx) {
  current = idx;
  document.getElementById('testimonialText').style.opacity = '0';
  document.getElementById('authorName').style.opacity = '0';
  document.getElementById('authorRole').style.opacity = '0';

  setTimeout(() => {
    document.getElementById('testimonialText').textContent = testimonials[idx].text;
    document.getElementById('authorName').textContent = testimonials[idx].name;
    document.getElementById('authorRole').textContent = testimonials[idx].role;

    document.getElementById('testimonialText').style.opacity = '1';
    document.getElementById('authorName').style.opacity = '1';
    document.getElementById('authorRole').style.opacity = '1';

    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }, 300);
}

// Auto-rotate every 6s
setInterval(() => {
  changeTestimonial((current + 1) % testimonials.length);
}, 6000);

// Add transition CSS via JS
const style = document.createElement('style');
style.textContent = '#testimonialText, #authorName, #authorRole { transition: opacity 0.3s ease; }';
document.head.appendChild(style);
