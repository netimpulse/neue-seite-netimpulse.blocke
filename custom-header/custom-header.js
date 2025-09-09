// Optional: fügt beim Scrollen eine Klasse hinzu, damit (falls gewünscht) ein Schatten erscheint
(function () {
  var header = document.querySelector('.ch-header.ch-with-shadow');
  if (!header) return;

  var last = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY || window.pageYOffset;
    if ((y > 4) !== (last > 4)) {
      header.classList.toggle('is-stuck', y > 4);
      last = y;
    }
  }, { passive: true });
})();
