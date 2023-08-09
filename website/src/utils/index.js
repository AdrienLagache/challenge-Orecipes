// eslint-disable-next-line import/prefer-default-export
export const getSubtitle = (recipesCount) => {
  if (recipesCount === 0) {
    return 'Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes';
  }
  if (recipesCount === 1) {
    return 'Bienvenue sur oRecipes, découvre notre recette';
  }
  return `Bienvenue sur oRecipes, découvre nos ${recipesCount} recettes`;
};

export const filterByRate = (rateArr, isAsc) => {
  const compare = (x, y) => {
    switch (isAsc) {
      case true:
        return x - y;
      default:
        return y - x;
    }
  };

  const sortArr = rateArr.sort(compare);

  for (let i = 0; i < sortArr.length; i += 1) {
    switch (sortArr[sortArr.length - 1]) {
      case 5:
        sortArr.pop();
        sortArr.unshift(5);
        break;

      default:
        break;
    }
  }
  return sortArr;
};
