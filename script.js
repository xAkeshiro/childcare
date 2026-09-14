/* Little Lightbulbs: small touches. No frameworks, no build step. */
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var label = toggle.querySelector('.nav-toggle-label');
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) setOpen(false);
    });
  }

  // Copyright year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Visit-request form: until a form service is connected, show a friendly note
  var form = document.querySelector('.enroll-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        var note = form.querySelector('.form-note');
        if (note) {
          note.hidden = false;
          note.setAttribute('tabindex', '-1');
          note.focus();
        }
      }
    });
  }
})();
