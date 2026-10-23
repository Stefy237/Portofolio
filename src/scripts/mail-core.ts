/**
 * Construction du lien mailto: de la fenêtre Mail (fonction pure, testée dans tests/mail.test.ts).
 */
export function buildMailto(to: string, subject: string, body: string): string {
  const params: string[] = [];
  if (subject.trim()) params.push(`subject=${encodeURIComponent(subject.trim())}`);
  if (body.trim()) params.push(`body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`);
  return `mailto:${encodeURIComponent(to).replace('%40', '@')}${params.length ? `?${params.join('&')}` : ''}`;
}
