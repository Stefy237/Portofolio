/**
 * Parcours : expériences, formation et compétences.
 * Un champ à null ou une liste vide = « à compléter ».
 */

export interface Experience {
  role: string;
  org: string;
  /** Type de contrat, affiché comme sur LinkedIn : « Stage », « Service civique », « CDI »… */
  type: string;
  place: string;
  /** Période affichée, ex. « mars – oct. 2026 ». null = à compléter. */
  period: string | null;
  summary: string;
  /** Réalisations concrètes (uniquement ce qui est public / autorisé par ta confidentialité). */
  highlights: string[];
  /** Compétences mobilisées, affichées sous l'expérience. */
  skills: string[];
  /** true = expérience technique principale (mise en avant). */
  main: boolean;
}

export interface Formation {
  degree: string;
  school: string;
  /** Nom court affiché en tête du profil (ex. « Polytech Grenoble »). */
  short: string;
  period: string;
  detail: string;
}

/** Contexte dans lequel une compétence a été pratiquée : c'est ce qui la rend défendable en entretien. */
export type SkillContext = 'stage' | 'projet' | 'apprentissage' | null;

export interface Skill {
  name: string;
  context: SkillContext;
}

export const experiences: Experience[] = [
  {
    role: 'Stagiaire ingénieure',
    org: 'Alstom Digital & Integrated Systems',
    type: 'Stage de fin d’études',
    place: 'Villeurbanne',
    period: null, // à compléter : mois de début – oct. 2026
    summary: 'Stage de fin d’études sur Security Gateway, un produit de cybersécurité.',
    highlights: [],
    skills: [],
    main: true,
  },
  {
    role: 'Volontaire',
    org: 'GUC Tennis',
    type: 'Service civique',
    place: 'Gières',
    period: 'sept. 2025 – mars 2026',
    summary: '',
    highlights: [],
    skills: [],
    main: false,
  },
];

export const formations: Formation[] = [
  {
    degree: "Diplôme d'ingénieur — double diplôme",
    school: 'Grenoble INP – Polytech Grenoble et ENSPY Yaoundé',
    short: 'Polytech Grenoble',
    period: '2026',
    detail: 'Spécialité Systèmes et Réseaux',
  },
];

export const skills: Skill[] = [
  { name: 'GitLab CI', context: null },
  { name: 'Docker', context: 'projet' },
  { name: 'Kubernetes', context: 'projet' },
  { name: 'Prometheus / Grafana', context: 'projet' },
  { name: 'Linux / FreeBSD', context: null },
  { name: 'Ansible', context: null },
  { name: 'Python', context: null },
  { name: 'Terraform', context: 'apprentissage' },
  { name: 'Angular · Django · Spring Boot', context: 'projet' },
];

export const skillContextLabel: Record<Exclude<SkillContext, null>, string> = {
  stage: 'Pratiqué en stage',
  projet: 'Pratiqué en projet',
  apprentissage: 'En apprentissage',
};

/** Initiales d'une organisation, pour les vignettes façon logo. */
export function initials(name: string): string {
  return name
    .replace(/[–—&·-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}
