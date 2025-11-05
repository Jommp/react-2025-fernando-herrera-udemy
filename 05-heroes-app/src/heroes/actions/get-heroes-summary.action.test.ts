import { describe, expect, test } from 'vitest';
import { getHeroesSummaryAction } from './get-heroes-summary.action';

describe('getHeroesSummaryAction', () => {
  test('should fetch summary and return complete information', async () => {
    const result = await getHeroesSummaryAction();

    expect(result).toStrictEqual({
      totalHeroes: expect.any(Number),
      strongestHero: expect.objectContaining({
        alias: expect.any(String),
        strength: expect.any(Number),
      }),
      smartestHero: expect.objectContaining({
        alias: expect.any(String),
        intelligence: expect.any(Number),
      }),
      heroCount: expect.any(Number),
      villainCount: expect.any(Number)
    });
  });
});
