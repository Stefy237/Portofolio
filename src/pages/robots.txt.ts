import type { APIRoute } from 'astro';

// Généré au build pour que l'adresse du plan du site suive SITE_URL (pages.dev ou domaine).
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
