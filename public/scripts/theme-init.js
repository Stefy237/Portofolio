// Applique le thème AVANT l'affichage de la page, pour éviter un flash clair → sombre.
// Fichier externe (et non script en ligne) pour rester compatible avec la CSP stricte.
(function () {
  var theme = null;
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {
    /* stockage indisponible (navigation privée) : on suit le système */
  }
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
