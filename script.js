/* =====================================================
   Dev Sajal Portfolio — Vanilla JS
   ===================================================== */

(function () {
  'use strict';

  /* ---------- Init Lucide icons ---------- */
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  /* ---------- Tab switching ---------- */
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  const navLinks = document.querySelectorAll('.nav-link');

  function activateTab(tabName) {
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === tabName;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    panels.forEach((p) => {
      p.classList.toggle('active', p.id === 'panel-' + tabName);
    });
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.dataset.tab === tabName);
    });

    // Animate skill bars when Skills tab is shown
    if (tabName === 'skills') {
      const bars = document.querySelectorAll('#panel-skills .bar > span');
      bars.forEach((b) => {
        const w = b.style.width;
        b.style.width = '0%';
        requestAnimationFrame(() => {
          setTimeout(() => { b.style.width = w; }, 80);
        });
      });
    }

    // Smooth scroll the tabs panel into view (top of main)
    const main = document.querySelector('.main-area');
    if (main && window.scrollY > main.offsetTop) {
      main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(link.dataset.tab);
      // close mobile menu
      const nav = document.querySelector('.top-nav');
      if (nav) nav.classList.remove('open');
    });
  });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const nav = document.querySelector('.top-nav');
      if (nav) nav.classList.toggle('open');
    });
  }

  /* ---------- Typewriter effect in hero ---------- */
  const phrases = [
    'whoami',
    'cat about.md',
    'PhD Researcher in IT',
    'Data &amp; Process Analyst',
    'Building digital workflows',
  ];
  const typed = document.getElementById('typed');
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    if (!typed) return;
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      typed.innerHTML = current.substring(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 70);
    } else {
      charIndex--;
      typed.innerHTML = current.substring(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 220);
        return;
      }
      setTimeout(tick, 35);
    }
  }
  setTimeout(tick, 600);

  /* ---------- Contact form -> mailto ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const msg = document.getElementById('cf-msg').value.trim();
      const subject = encodeURIComponent('Portfolio inquiry from ' + name);
      const body = encodeURIComponent(
        'Hi Sajal,\n\n' + msg + '\n\n— ' + name + '\n' + email
      );
      window.location.href =
        'mailto:drd.sajal1992@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- IntersectionObserver — animate cards on view ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.card, .project, .tl-item').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* ---------- Initial activate + icons ---------- */
  activateTab('summary');
  refreshIcons();

  // Re-render icons after dynamic content (icons render once initial)
  document.addEventListener('DOMContentLoaded', refreshIcons);
  window.addEventListener('load', refreshIcons);
})();
