/**
 * Certifications. Une fois obtenue : passe `status` à 'obtenue', renseigne `obtainedOn`
 * et `verifyUrl` (lien de vérification Credly ou de l'organisme).
 */

export type CertStatus = 'en préparation' | 'obtenue';

export interface Certification {
  name: string;
  issuer: string;
  /** Ce que la certification valide, en une ligne. */
  scope: string;
  status: CertStatus;
  /** Date d'examen visée, ex. « déc. 2026 ». null = non affichée. */
  targetDate: string | null;
  obtainedOn: string | null;
  verifyUrl: string | null;
}

export const certifications: Certification[] = [
  {
    name: 'Terraform Associate (004)',
    issuer: 'HashiCorp',
    scope: 'Infrastructure as Code avec Terraform',
    status: 'en préparation',
    targetDate: null,
    obtainedOn: null,
    verifyUrl: null,
  },
  {
    name: 'CKAD — Certified Kubernetes Application Developer',
    issuer: 'CNCF / The Linux Foundation',
    scope: "Déploiement et exploitation d'applications sur Kubernetes",
    status: 'en préparation',
    targetDate: null,
    obtainedOn: null,
    verifyUrl: null,
  },
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    scope: "Conception d'architectures sur AWS",
    status: 'en préparation',
    targetDate: null,
    obtainedOn: null,
    verifyUrl: null,
  },
];
