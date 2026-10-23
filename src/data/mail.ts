/**
 * Modèles de messages proposés dans la fenêtre Mail.
 * Un clic remplit l'objet et le corps ; le recruteur n'a plus qu'à compléter et envoyer.
 */

export interface MailTemplate {
  label: string;
  subject: string;
  body: string;
}

export const mailTemplates: MailTemplate[] = [
  {
    label: 'Proposer un entretien',
    subject: 'Proposition d’entretien — poste DevOps',
    body:
      'Bonjour Laura,\n\nVotre profil a retenu notre attention pour un poste de [intitulé] chez [entreprise].\n' +
      'Seriez-vous disponible pour un premier échange cette semaine ou la suivante ?\n\nBien cordialement,\n[Prénom Nom]\n[Téléphone]',
  },
  {
    label: 'Demander le CV',
    subject: 'Demande de CV',
    body: 'Bonjour Laura,\n\nPourriez-vous m’envoyer votre CV à jour ?\n\nMerci,\n[Prénom Nom]',
  },
  {
    label: 'Question sur un projet',
    subject: 'Question sur votre projet',
    body: 'Bonjour Laura,\n\nJ’ai une question à propos de [projet] :\n\n\nBonne journée,\n[Prénom Nom]',
  },
];
