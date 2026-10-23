/**
 * Activité freelance (fenêtre organisée comme un profil Malt).
 */

export const freelance = {
  /** Titre du profil freelance. */
  headline: 'Refonte de sites vitrines',
  pitch:
    "Je refais les sites d'entreprise vieillissants ou mal conçus. Ma première niche : les restaurants africains.",
  note: 'Une activité que je mène en parallèle de ma recherche de CDI.',
  /** Tarif journalier indicatif en euros (TJM). null = non affiché. */
  dailyRate: null as number | null,
  /** Disponibilité pour des missions, ex. « Disponible pour des missions courtes ». Vide = non affiché. */
  availability: '',
  /** Prestations proposées, une ligne chacune. */
  services: [] as string[],
  /** Compétences affichées en étiquettes, comme sur Malt. */
  skills: [] as string[],
  /** Exemple de réalisation (lien vers un avant / après). */
  example: '',
};
