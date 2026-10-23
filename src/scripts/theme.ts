/**
 * Thème clair / sombre.
 * - Au premier chargement, le thème suit le système (appliqué avant l'affichage par public/scripts/theme-init.js).
 * - Un clic sur le bouton (ou « theme clair|sombre » dans le terminal) enregistre le choix.
 * - Tant qu'aucun choix n'est enregistré, le site suit les changements du système en direct.
 */

export type Theme = 'light' | 'dark';

const KEY = 'theme';

function saved(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function setTheme(theme: Theme, persist = true): void {
  document.documentElement.dataset.theme = theme;
  if (persist) {
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* stockage indisponible : le choix vaut pour la page en cours */
    }
  }
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre');
  });
}

export function initTheme(): void {
  setTheme(currentTheme(), false);

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => setTheme(currentTheme() === 'dark' ? 'light' : 'dark'));
  });

  window.addEventListener('os:theme', (event) => {
    const value = (event as CustomEvent<{ value: Theme }>).detail?.value;
    if (value === 'light' || value === 'dark') setTheme(value);
  });

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', (e) => {
    if (!saved()) setTheme(e.matches ? 'dark' : 'light', false);
  });
}
