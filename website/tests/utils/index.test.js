import { expect, test, describe } from 'vitest';

import { getSubtitle, filterByRate } from '../../src/utils';

describe('function getSubtitle', () => {
  test('no recipe', () => {
    expect(getSubtitle(0)).toBe(
      'Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes'
    );
  });

  test('1 recipe', () => {
    expect(getSubtitle(1)).toBe(
      'Bienvenue sur oRecipes, découvre notre recette'
    );
  });

  test('more than 1 recipe', () => {
    expect(getSubtitle(5)).toBe(
      'Bienvenue sur oRecipes, découvre nos 5 recettes'
    );
    expect(getSubtitle(13)).toBe(
      'Bienvenue sur oRecipes, découvre nos 13 recettes'
    );
  });
});

describe('function filterByRate', () => {
  test('ascendent order case', () => {
    expect(filterByRate([2, 4, 1], true)).toStrictEqual([1, 2, 4]);
  });

  test('descendant order case', () => {
    expect(filterByRate([2, 4, 1], false)).toStrictEqual([4, 2, 1]);
  });

  test('ascendant order case with 1 value equal to 5', () => {
    expect(filterByRate([1, 5, 2], true)).toStrictEqual([5, 1, 2]);
  });

  test('ascendant order case with several values equal to 5', () => {
    expect(filterByRate([1, 5, 3, 5, 5, 4, 1, 5], true)).toStrictEqual([
      5, 5, 5, 5, 1, 1, 3, 4,
    ]);
  });
});
