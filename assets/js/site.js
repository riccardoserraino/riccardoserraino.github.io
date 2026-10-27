(function () {
  var root = document.documentElement;

  /* ---- theme toggle (system preference by default, remembered per browser) ---- */
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---- reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min((i % 4) * 70, 210) + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- report pages: table of contents + reading progress ---- */
  var body = document.querySelector('.report-body');
  var toc = document.querySelector('.toc ol');
  if (body && toc) {
    var heads = body.querySelectorAll('h2');
    if (!heads.length) { document.querySelector('.toc').classList.add('is-empty'); }
    var links = [];
    heads.forEach(function (h, i) {
      if (!h.id) {
        h.id = (h.textContent || 'section-' + i).toLowerCase().trim()
          .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section-' + i;
      }
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      toc.appendChild(li);
      links.push(a);
    });
    if ('IntersectionObserver' in window && links.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id); });
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      heads.forEach(function (h) { spy.observe(h); });
    }
  }

  var bar = document.querySelector('.progress span');
  if (bar) {
    var ticking = false;
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---- visit counter (GoatCounter): fills the small line in the home footer ---- */
  var visits = document.querySelector('.visits[data-gc]');
  if (visits && window.fetch) {
    fetch('https://' + visits.getAttribute('data-gc') + '.goatcounter.com/counter/TOTAL.json?start=month')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && d.count) {
          visits.querySelector('.visits-n').textContent = d.count;
          visits.hidden = false;
        }
      })
      .catch(function () {});
  }
})();
