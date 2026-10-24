// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL publique du site : utilisée pour les liens canoniques et les métadonnées Open Graph.
// `||` et non `??` : en CI, une variable de dépôt absente arrive sous forme de chaîne vide.
const SITE_URL = process.env.SITE_URL || 'https://laura-nguegang.pages.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Aucun Markdown sur le site, et Shiki injecte des styles en ligne incompatibles avec la CSP.
  markdown: { syntaxHighlight: false },
  // La barre d'outils de développement d'Astro recouvrirait le dock.
  devToolbar: { enabled: false },
  build: {
    // Les feuilles de style restent des fichiers séparés (mis en cache par le navigateur).
    inlineStylesheets: 'never',
  },
  // Astro calcule lui-même les empreintes (hash) des scripts et styles qu'il génère
  // et les ajoute à une balise <meta http-equiv="Content-Security-Policy">.
  // Les en-têtes qui ne peuvent pas passer par une balise meta (frame-ancestors, HSTS…)
  // sont dans public/_headers.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        // Intégrations autorisées : post LinkedIn et vidéo YouTube (mode sans cookie).
        'frame-src https://www.linkedin.com https://www.youtube-nocookie.com',
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
});
