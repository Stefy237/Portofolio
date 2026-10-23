import { describe, expect, it } from 'vitest';
import { buildMailto } from '../src/scripts/mail-core';

describe('buildMailto', () => {
  it('encode objet et message', () => {
    const url = buildMailto('laura@exemple.fr', 'Entretien & poste', 'Bonjour\nLaura');
    expect(url).toBe('mailto:laura@exemple.fr?subject=Entretien%20%26%20poste&body=Bonjour%0D%0ALaura');
  });

  it("n'ajoute pas de paramètres vides", () => {
    expect(buildMailto('laura@exemple.fr', ' ', '')).toBe('mailto:laura@exemple.fr');
  });

  it('empêche d’injecter des paramètres par l’adresse', () => {
    expect(buildMailto('a@b.fr?cc=x@y.fr', '', '')).toBe('mailto:a@b.fr%3Fcc%3Dx%40y.fr');
  });
});
