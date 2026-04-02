// ============================================
//  AL NOUR SCHOOL — MAIN JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ─────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Burger menu ──────────────────────────
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      // Animate spans
      const spans = burger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // ── Reveal on scroll ─────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Counter animation ────────────────────
  function animateCounter(el, target, duration = 1800) {
    let start = null;
    const isYear = target > 1900;
    const startVal = isYear ? target - 30 : 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current.toLocaleString('ar-MA');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('ar-MA');
    }
    requestAnimationFrame(step);
  }

  const stats = document.querySelectorAll('.animate-stat');
  if (stats.length) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numEl = entry.target.querySelector('.stat-num');
          const target = parseInt(numEl.dataset.target, 10);
          animateCounter(numEl, target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    stats.forEach(s => statsObserver.observe(s));
  }

  // ── Lightbox (gallery pages) ─────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    window.openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };
    if (lightboxClose) lightboxClose.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  // ── Contact form ─────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.textContent = '…';
      // Simulate send (replace with Formspree / Netlify endpoint)
      await new Promise(r => setTimeout(r, 1200));
      const success = document.getElementById('formSuccess');
      if (success) {
        form.style.display = 'none';
        success.style.display = 'block';
      }
    });
  }

  // ── Filter buttons (news page only) ─────
  // Only bind to buttons that have data-filter AND are inside #newsGridFull's sibling
  // container — never touch data-level buttons (schedule tabs).
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      // Only reset siblings in the same parent, not every filter-btn on the page
      const parent = btn.closest('.news-filters, .gallery-categories, .gallery-filter-bar');
      if (!parent) return;
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.news-card').forEach(card => {
        if (!filter || filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── Active nav link ──────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.style.color = 'var(--c-text)';
      a.style.fontWeight = '500';
    }
  });
});
