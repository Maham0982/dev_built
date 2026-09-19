// ---------- Sticky nav shadow on scroll ----------
const nav = document.getElementById('siteNav');
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Mobile menu toggle ----------
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Hero load-in (single orchestrated entrance, not per-section) ----------
requestAnimationFrame(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
});

// ---------- Contact form (mailto fallback — swap for a real backend / form service) ----------
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const service = data.get('service');
  const budget = data.get('budget');
  const message = data.get('message');

  const subject = encodeURIComponent(`New project inquiry — ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\n${message}`
  );

  window.location.href = `mailto:hello@devbuilt.com?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email client…';
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
