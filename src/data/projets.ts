/**
 * Projets mis en avant. L'ordre de la liste est l'ordre d'affichage.
 *
 * Si `repo` est renseigné (format « propriétaire/nom »), le build va chercher sur GitHub
 * le langage principal, le nombre d'étoiles et la date du dernier push.
 */

export interface Projet {
  slug: string;
  name: string;
  /** Une ligne. */
  summary: string;
  /** Deux à quatre phrases : le problème, ce que tu as fait, le résultat. */
  description: string;
  stack: string[];
  /** Dépôt GitHub « propriétaire/nom ». null = pas de dépôt public (ou à compléter). */
  repo: string | null;
  demo: string | null;
  prod: string | null;
  /** Langage principal, utilisé quand GitHub ne le fournit pas (pastille de couleur). null = non affiché. */
  language: string | null;
  /** Affiché en grand dans la fenêtre Projets. */
  featured: boolean;
}

export const projets: Projet[] = [
  {
    slug: 'assista-crise',
    name: 'Assista-Crise',
    summary: 'Plateforme de gestion de crise avec IoT.',
    description:
      "J'ai migré son architecture multi-services de Docker Compose vers Kubernetes, " +
      'et mis en place la supervision avec Prometheus et Grafana : métriques, tableaux de bord et alertes.',
    stack: ['Angular 19', 'Django 5', 'PostGIS', 'Redis', 'Docker', 'Kubernetes', 'MQTT', 'Meshtastic LoRa'],
    repo: null, // à compléter si le dépôt est public
    demo: null,
    prod: 'https://assista-crise.fr',
    language: null,
    featured: true,
  },
  {
    slug: 'mysh',
    name: 'Mysh',
    summary: 'Configurateur web pour personnaliser son shell Linux.',
    description:
      "On choisit ses options et son gestionnaire de paquets, et l'outil génère un script d'installation sécurisé, " +
      'avec la marche à suivre pour annuler les changements.',
    stack: [], // à compléter
    repo: 'Stefy237/Mysh',
    demo: 'https://stefy237.github.io/Mysh',
    prod: null,
    language: null,
    featured: true,
  },
  {
    slug: 'ecom',
    name: 'eCOM',
    summary: 'Application de planification du personnel.',
    description: 'Application de planification du personnel, avec un pipeline de tests complet.',
    stack: ['JHipster 8', 'Spring Boot 3', 'Angular'],
    repo: null, // à compléter : « Stefy237/nom-du-depot »
    demo: null,
    prod: null,
    language: null,
    featured: false,
  },
  {
    slug: 'jdr-cli',
    name: 'JDR CLI',
    summary: 'Application en ligne de commande qui met en œuvre six design patterns.',
    description: 'Application en ligne de commande qui met en œuvre six design patterns.',
    stack: ['Java 17', 'Maven', 'SQLite', 'JUnit 5'],
    repo: null, // à compléter
    demo: null,
    prod: null,
    language: 'Java',
    featured: false,
  },
];
