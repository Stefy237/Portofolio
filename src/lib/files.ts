import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Le build est lancé depuis la racine du projet (npm run build) : public/ s'y trouve.
// (Un chemin relatif à ce fichier ne marcherait pas : au build, le code est regroupé ailleurs.)
const PUBLIC_DIR = join(process.cwd(), 'public');

/**
 * Vérifie au build qu'un fichier existe dans public/ (ex. '/documents/CV.pdf').
 * Permet de ne pas afficher un bouton « Télécharger » qui mènerait à une erreur 404.
 */
export function publicFileExists(publicPath: string): boolean {
  if (!publicPath) return false;
  const relative = publicPath.replace(/^\/+/, '');
  if (relative.includes('..')) return false;
  return existsSync(join(PUBLIC_DIR, relative));
}
