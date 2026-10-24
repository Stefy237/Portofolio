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
  /** État du service, affiché en pastille. */
  status: 'en place' | 'en cours';
}

export interface Recording {
  title: string;
  description: string;
  /** Lien vers l'enregistrement asciinema (ou fichier .cast dans public/). */
  url: string;
}

export const phases: Phase[] = [
  { name: 'Phase 1', status: 'en cours', content: 'Infrastructure as Code, Linux, Kubernetes' },
  { name: 'Phase 2', status: 'à venir', content: 'Pipelines, conteneurs, déploiement continu' },
  { name: 'Phase 3', status: 'à venir', content: 'Métriques, logs, alerting' },
  { name: 'Phase 4', status: 'à venir', content: 'Réseau, identité, secrets, politiques, sauvegardes' },
];

export const services: Service[] = [
  { name: 'Proxmox VE', role: 'hyperviseur : machines virtuelles Debian', status: 'en cours' },
  { name: 'Terraform', role: 'création des VM depuis le code', status: 'en cours' },
  { name: 'Ansible', role: 'configuration des nœuds (utilisateurs, SSH, pare-feu)', status: 'en cours' },
  { name: 'k3s', role: 'cluster Kubernetes léger', status: 'en cours' },
];

export const homelabLinks = {
  /** Page de statut publique (ex. Uptime Kuma derrière un tunnel). */
  status: '',
  /** Tableau de bord Grafana public en lecture seule. */
  grafana: '',
  /** Dépôt du code d'infrastructure (Terraform, Ansible…). */
  repo: '',
};

export const recordings: Recording[] = [];
