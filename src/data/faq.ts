/**
 * Questions d'entretien et tes réponses.
 * Seules les questions qui ont une réponse sont publiées en production.
 */

export interface Question {
  question: string;
  answer: string;
}

export const faq: Question[] = [
  { question: 'Pourquoi le DevOps, après un stage en cybersécurité ?', answer: '' },
  { question: 'Pourquoi avoir migré Assista-Crise vers Kubernetes ?', answer: '' },
  { question: 'Racontez-moi un problème technique que vous avez résolu.', answer: '' },
  { question: "Qu'est-ce que votre double diplôme vous a apporté ?", answer: '' },
  { question: 'Quel poste et quel environnement recherchez-vous ?', answer: '' },
  {
    question: 'Quand pouvez-vous commencer, et êtes-vous mobile ?',
    answer: 'Je suis disponible dès octobre 2026, depuis Lyon.',
  },
];
