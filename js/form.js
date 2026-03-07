/*
 * form.js — Enquiry form validation, reCAPTCHA v3, Gmail mailto opener
 * Stadias.in
 *
 * TO ACTIVATE reCAPTCHA:
 *  1. Register at https://www.google.com/recaptcha/admin
 *  2. Replace 'YOUR_SITE_KEY' below with your actual Site Key
 *  3. Also replace 'YOUR_SITE_KEY' in the <script> tag inside index.html
 */

const RECAPTCHA_SITE_KEY = 'YOUR_SITE_KEY';

function openGmailEnquiry(e) {
  if (e) e.preventDefault();

  const fname = document.getElementById('f-fname').value.trim();
  const lname = document.getElementById('f-lname').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const type  = document.getElementById('f-type').value.trim();
  const brief = document.getElementById('f-brief').value.trim();
  const err   = document.getElementById('form-error');
  const btn   = document.getElementById('submitEnquiryBtn');

  // Validation
  if (!fname || !lname)                        { showErr(err, '⚠ Please enter your full name.');           return; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { showErr(err, '⚠ Please enter a valid email address.');   return; }
  if (!phone)                                  { showErr(err, '⚠ Please enter your phone number.');        return; }
  if (!type)                                   { showErr(err, '⚠ Please select a project type.');          return; }
  err.style.display = 'none';

  // Dev mode — reCAPTCHA not yet configured
  if (typeof grecaptcha === 'undefined' || RECAPTCHA_SITE_KEY === 'YOUR_SITE_KEY') {
    sendGmail(fname, lname, email, phone, type, brief, null);
    return;
  }

  // reCAPTCHA v3 execution
  btn.classList.add('loading');
  btn.textContent = 'Verifying…';

  grecaptcha.ready(() => {
    grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'enquiry_submit' })
      .then(token => {
        btn.classList.remove('loading');
        btn.textContent = 'Submit Enquiry →';
        if (!token) {
          showErr(err, '⚠ reCAPTCHA check failed. Please refresh and try again.');
          return;
        }
        sendGmail(fname, lname, email, phone, type, brief, token);
      })
      .catch(() => {
        btn.classList.remove('loading');
        btn.textContent = 'Submit Enquiry →';
        showErr(err, '⚠ reCAPTCHA error. Please refresh and try again.');
      });
  });
}

function sendGmail(fname, lname, email, phone, type, brief, captchaToken) {
  const to      = 'info.stadias@gmail.com';
  const subject = `Project Enquiry — ${type} | ${fname} ${lname}`;

  // Only include token line if a real reCAPTCHA token was issued
  const tokenLine = (captchaToken && captchaToken !== '(reCAPTCHA not configured)')
    ? `\n─────────────────────────────\nreCAPTCHA Token: ${captchaToken}\n(Verify at: https://www.google.com/recaptcha/api/siteverify)`
    : '';

  const body =
`Dear Stadias Team,

I would like to enquire about a project. Please find my details below:

Name        : ${fname} ${lname}
Email       : ${email}
Phone       : ${phone}
Project Type: ${type}

Project Brief:
${brief || '(Not provided)'}

Looking forward to hearing from you.

Regards,
${fname} ${lname}${tokenLine}`;

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailURL, '_blank');
}

function showErr(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'fadeUp 0.3s ease forwards';
}
