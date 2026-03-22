/**
 * AI IQ World Bank — Main JS
 * Navigation, hamburger menu, sticky header, smooth scroll
 */

(function () {
  'use strict';

  // ── Sticky header shadow on scroll ──────────────────────────
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
      } else {
        header.style.boxShadow = '';
      }
    }, { passive: true });
  }

  // ── Active nav link based on scroll ─────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (sec) {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id');
        }
      });
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // ── Hamburger menu ───────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Dropdown menu (keyboard & hover) ────────────────────────
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function (dd) {
    const toggle = dd.querySelector('.dropdown-toggle');
    const menu = dd.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Smooth scroll for anchor links ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 108; // header + ticker height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ── Toast notification ───────────────────────────────────────
  window.showToast = function (message, type) {
    type = type || 'info';
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML =
      '<span class="toast-icon">' + (icons[type] || icons.info) + '</span>' +
      '<span class="toast-message">' + message + '</span>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.classList.add('show');
      });
    });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 300);
    }, 3500);
  };

  // ── Accordion ────────────────────────────────────────────────
  document.querySelectorAll('.accordion-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const item = this.closest('.accordion-item');
      const isOpen = item.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // ── Contact form submission ──────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Slanje...';

      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = original;
        contactForm.reset();
        window.showToast('Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.', 'success');
      }, 1500);
    });
  }

  // ── Ticker live update ───────────────────────────────────────
  function updateTicker() {
    const items = document.querySelectorAll('.ticker-item');
    items.forEach(function (item) {
      const valueEl = item.querySelector('.up, .down');
      if (!valueEl) return;
      const isUp = Math.random() > 0.4;
      const change = (Math.random() * 2).toFixed(2);
      valueEl.textContent = (isUp ? '+' : '-') + change + '%';
      valueEl.className = isUp ? 'up' : 'down';
    });
  }

  setInterval(updateTicker, 5000);

})();
