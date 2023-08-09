export const GET_RECIPES = 'GET_RECIPES';
export const GET_FAVORITE_RECIPES = 'GET_FAVORITE_RECIPES';
export const LOAD_FAVORITE_RECIPES = 'LOAD_FAVORITE_RECIPES';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const TOGGLE_LOADING_ANIMATION = 'TOGGLE_LOADING_ANIMATION';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export const getFavoriteRecipes = (favRecipes) => ({
  type: GET_FAVORITE_RECIPES,
  favRecipes,
});

export const loadFavoriteRecipes = () => ({
  type: LOAD_FAVORITE_RECIPES,
});

export const loadRecipes = () => ({
  type: LOAD_RECIPES,
});

export const toggleLoadingAnimation = () => ({
  type: TOGGLE_LOADING_ANIMATION,
});
