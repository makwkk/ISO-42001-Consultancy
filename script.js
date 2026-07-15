/* Edtrix Solutions — minimal client-side enhancements */
(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.getElementById('menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Toast helper
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(msg, kind) {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = 'toast show ' + (kind || '');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 4500);
  }

  // Email validation (RFC-pragmatic)
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Form handler factory.
  // In production these would POST to an API. Here we acknowledge
  // the lead locally so the demo works without a backend.
  function bindLeadForm(formId, successMsg) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();

      if (!name) { showToast('Please enter your name.', 'error'); return; }
      if (!emailRe.test(email)) { showToast('Please enter a valid work email.', 'error'); return; }

      // Placeholder: replace with fetch('/api/lead', {...}) in production.
      try { console.log('[Edtrix] lead captured', { name: name, email: email, source: formId }); } catch (_) {}
      form.reset();
      showToast(successMsg, 'success');
    });
  }

  bindLeadForm('hero-form', 'Checklist is on its way. Check your inbox in ~60 seconds.');
  bindLeadForm('lead-form', 'Checklist sent. Check your inbox (and spam, just in case).');
  bindLeadForm('enquiry-form', 'Thanks! We\'ll be in touch within one business day.');

  // Smooth-scroll polyfill for older browsers (best-effort)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href && href.length > 1 && document.querySelector(href)) {
        // Default browser smooth scroll via CSS handles modern browsers.
        // This just ensures focus moves for a11y.
        setTimeout(function () {
          var target = document.querySelector(href);
          if (target && target.setAttribute) {
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        }, 400);
      }
    });
  });
})();
