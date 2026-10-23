/**
 * Homelab : feuille de route, services, liens publics en lecture seule, sessions enregistrées.
 */

export type PhaseStatus = 'terminée' | 'en cours' | 'à venir';

export interface Phase {
  name: string;
  status: PhaseStatus;
  /** Ce que contient la phase, en une phrase. Vide = à compléter. */
  content: string;
}

export interface Service {
  name: string;
  /** Rôle du service, ex. « supervision », « reverse proxy ». */
  role: string;
}

export interface Recording {
  title: string;
  description: string;
  /** Lien vers l'enregistrement asciinema (ou fichier .cast dans public/). */
  url: string;
}

export const phases: Phase[] = [
  { name: 'Phase 1', status: 'en cours', content: '' },
  { name: 'Phase 2', status: 'à venir', content: '' },
  { name: 'Phase 3', status: 'à venir', content: '' },
];

export const services: Service[] = [];

export const homelabLinks = {
  /** Page de statut publique (ex. Uptime Kuma derrière un tunnel). */
  status: '',
  /** Tableau de bord Grafana public en lecture seule. */
  grafana: '',
  /** Dépôt du code d'infrastructure (Terraform, Ansible…). */
  repo: '',
};

export const recordings: Recording[] = [];
