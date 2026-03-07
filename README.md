# Stadias.in — Website

## Folder Structure

```
stadias/
├── index.html              ← Entry point (loads all sections + scripts)
│
├── css/
│   ├── base.css            ← Variables, reset, body, cursor, buttons
│   ├── components.css      ← Navbar, hamburger, ticker, WhatsApp FAB, reCAPTCHA
│   ├── sections.css        ← Hero, About, Services, Projects, Stats, Testimonial, Contact, Footer
│   ├── animations.css      ← @keyframes, scroll reveal classes
│   └── responsive.css      ← Media queries (1024px / 768px / 480px / 375px)
│
├── js/
│   ├── cursor.js           ← Custom cursor (auto-disabled on touch)
│   ├── nav.js              ← Navbar scroll, hamburger / mobile nav
│   ├── parallax.js         ← Parallax effects (disabled on mobile)
│   ├── animations.js       ← Scroll reveal + stat counter animation
│   ├── testimonials.js     ← Testimonial carousel
│   └── form.js             ← Form validation, reCAPTCHA v3, Gmail opener
│
├── sections/
│   ├── nav.html            ← Top navbar + mobile drawer
│   ├── hero.html           ← Hero + ticker strip
│   ├── about.html          ← About section
│   ├── services.html       ← 6 service cards
│   ├── projects.html       ← Projects parallax divider + portfolio grid
│   ├── contact.html        ← Parallax banner + stats + testimonial + enquiry form
│   └── footer.html         ← Footer + WhatsApp FAB
│
└── assets/
    ├── images/             ← Add your project/team images here
    └── icons/              ← Add custom icons here
```

## To Activate reCAPTCHA v3

1. Go to https://www.google.com/recaptcha/admin (sign in with Gmail)
2. Create → reCAPTCHA v3 → add your domain (e.g. stadias.in)
3. Copy the **Site Key**
4. Replace `YOUR_SITE_KEY` in **two places**:
   - `index.html` line 11 (the script src)
   - `js/form.js` line 12 (the constant)

## Deployment Note

Sections are loaded via `fetch()` — this requires a web server.
- ✅ Works on: Netlify, GitHub Pages, Apache, Nginx, any static host
- ❌ Does NOT work opening index.html directly from file system (file://)
  → Use `npx serve .` or VS Code Live Server for local development

## WhatsApp Number

Update the number in `sections/footer.html`:
  href="https://wa.me/91XXXXXXXXXX?text=..."
  Replace 91XXXXXXXXXX with your country code + number.
