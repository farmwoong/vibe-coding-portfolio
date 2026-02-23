(function () {
  'use strict';

  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
      menuToggle.setAttribute('aria-label', nav.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기');
    });
  }

  // Close mobile menu when clicking a nav link (anchor)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Optional: header background on scroll (subtle)
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
