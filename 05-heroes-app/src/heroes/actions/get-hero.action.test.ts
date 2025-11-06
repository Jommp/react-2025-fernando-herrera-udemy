import { describe, expect, test } from 'vitest';
import { getHeroAction } from './get-hero.action';

describe('getHeroAction', () => {
  test('should fetch hero data and return with complete image url', async () => {
    const idSlug = 'peter-parker';
    const result = await getHeroAction(idSlug);

    expect(result).toStrictEqual({
      id: '5',
      name: 'Peter Parker',
      slug: 'peter-parker',
      alias: 'Spider-Man',
      powers: [
        'Escalar muros',
        'Sentido arácnido',
        'Lanzar telarañas',
        'Agilidad sobrehumana',
        'Reflejos mejorados'
      ],
      description: 'Tu amistoso vecino Spider-Man, con gran poder viene una gran responsabilidad.',
      strength: 7,
      intelligence: 9,
      speed: 7,
      durability: 7,
      team: 'Vengadores',
      image: expect.any(String),
      firstAppearance: '1962',
      status: 'Active',
      category: 'Hero',
      universe: 'Marvel'
    });

    expect(result.image).toContain('http');
  });

  test('should throw and error if hero is not found', async () => {
    const slug = 'spiderman-2';

    const result = await getHeroAction(slug).catch(error => {
      expect(error).toBeDefined();
      expect(error.message).toBe('Request failed with status code 404');
    });

    expect(result).toBeUndefined();
  });
});
