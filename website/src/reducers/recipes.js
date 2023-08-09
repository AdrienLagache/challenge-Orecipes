import {
  GET_FAVORITE_RECIPES,
  GET_RECIPES,
  TOGGLE_LOADING_ANIMATION,
} from '../actions/recipes';
// import data from '../data';

export const initialState = {
  list: [],
  favorites: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };

    case TOGGLE_LOADING_ANIMATION:
      return {
        ...state,
      };

    case GET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.favRecipes,
      };

    default:
      return state;
  }
};

export default reducer;
