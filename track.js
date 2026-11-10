// Counts a click on every link and button of the site in GoatCounter (Chris, 10 Nov 2026: every button on the site).
// Elements with their own data-goatcounter-click name (the models cards, the home cards) are counted by count.js itself;
// this catches all the rest: <page>/<kind>/<what>, e.g. models/filter/Pokémon, models/view/list, privacy/link/terms.html.
(function () {
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '');
  if (page === 'index') page = 'home';
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest && ev.target.closest('a,button');
    if (!el || el.hasAttribute('data-goatcounter-click')) return;
    var g = window.goatcounter;
    if (!g || !g.count) return;
    var text = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
    var what = el.dataset.f ? 'filter/' + el.dataset.f
      : el.dataset.m ? 'view/' + el.dataset.m
      : el.getAttribute('href') ? 'link/' + el.getAttribute('href').replace(/^https?:\/\//, '').split('?')[0]
      : 'button/' + text;
    g.count({ path: (page + '/' + what).slice(0, 250), title: text, event: true });
  }, true);
})();
