// @ts-check
import { defineConfig } from 'astro/config';

// URL publique du site : utilisée pour les liens canoniques et les métadonnées Open Graph.
// À remplacer par ton nom de domaine (voir AVANCEMENT.md, étape « Mettre en ligne »).
const SITE_URL = process.env.SITE_URL ?? 'https://laura-nguegang.example';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
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
