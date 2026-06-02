/*
 * form.js — Contact form Gmail handler
 * Track and Field Infra Pvt. Ltd.
 */

function openGmailEnquiry(e) {
  e.preventDefault();
  const btn = document.getElementById('submitEnquiryBtn');
  const errEl = document.getElementById('form-error');
  errEl.style.display = 'none';

  const fname = document.getElementById('f-fname').value.trim();
  const lname = document.getElementById('f-lname').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const type  = document.getElementById('f-type').value;
  const brief = document.getElementById('f-brief').value.trim();

  if (!fname || !email || !phone || !type || !brief) {
    errEl.textContent = 'PLEASE FILL IN ALL REQUIRED FIELDS.';
    errEl.style.display = 'block';
    return;
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    errEl.textContent = 'PLEASE ENTER A VALID EMAIL ADDRESS.';
    errEl.style.display = 'block';
    return;
  }

  btn.textContent = 'Opening Email...';
  btn.classList.add('loading');

  const subject = encodeURIComponent(`New Project Enquiry: ${type} — ${fname} ${lname}`);
  const body = encodeURIComponent(
    `Hello Track & Field Infra Team,\n\n` +
    `I would like to enquire about a sports infrastructure project.\n\n` +
    `Name: ${fname} ${lname}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Project Type: ${type}\n\n` +
    `Project Brief:\n${brief}\n\n` +
    `Please get in touch at your earliest convenience.\n\n` +
    `Regards,\n${fname} ${lname}`
  );

  window.location.href = `mailto:infotrackandfields@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    btn.textContent = 'Submit Enquiry →';
    btn.classList.remove('loading');
  }, 3000);
}
