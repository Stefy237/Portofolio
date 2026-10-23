/**
 * Fenêtre Mail : modèles de message, copie de l'adresse, envoi.
 *
 * Le site est statique : « Envoyer » ouvre la messagerie du visiteur avec le message prérempli (lien mailto:).
 * L'expéditeur est donc le vrai compte du recruteur, et aucune donnée ne transite par un serveur tiers.
 */
import { buildMailto } from './mail-core';

export function mountMail(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>('[data-mail-form]');
  const subject = root.querySelector<HTMLInputElement>('[data-mail-subject]');
  const body = root.querySelector<HTMLTextAreaElement>('[data-mail-body]');
  const status = root.querySelector<HTMLElement>('[data-mail-status]');
  const to = root.dataset.to ?? '';
  if (!form || !subject || !body || !status) return;

  const say = (text: string) => {
    status.textContent = text;
  };

  root.querySelectorAll<HTMLButtonElement>('[data-template]').forEach((btn) => {
    btn.addEventListener('click', () => {
      subject.value = btn.dataset.subject ?? '';
      body.value = btn.dataset.body ?? '';
      root.querySelectorAll('[data-template]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      body.focus();
      // Place le curseur sur le premier champ à compléter, s'il y en a un.
      const i = body.value.indexOf('[');
      if (i >= 0) body.setSelectionRange(i, body.value.indexOf(']', i) + 1);
      say('');
    });
  });

  root.querySelector<HTMLButtonElement>('[data-mail-copy]')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(to);
      say(`Adresse copiée : ${to}`);
    } catch {
      say(`Copie impossible ici. L'adresse est : ${to}`);
    }
  });

  root.querySelector<HTMLButtonElement>('[data-mail-clear]')?.addEventListener('click', () => {
    subject.value = '';
    body.value = '';
    root.querySelectorAll('[data-template]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    subject.focus();
    say('Brouillon effacé.');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!to) return;
    window.location.href = buildMailto(to, subject.value, body.value);
    say(`Votre messagerie devrait s'ouvrir avec ce message. Rien ne s'est passé ? Écrivez directement à ${to}.`);
  });
}
