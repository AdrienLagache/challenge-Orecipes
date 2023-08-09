import axios from 'axios';

import {
  LOAD_RECIPES,
  getRecipes,
  LOAD_FAVORITE_RECIPES,
  getFavoriteRecipes,
} from '../actions/recipes';

const getMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      axios
        .get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(getRecipes(response.data));
        })
        .catch((error) => {
          alert(error);
        });
      break;

    case LOAD_FAVORITE_RECIPES:
      axios
        .get('http://localhost:3001/favorites', {
          headers: {
            Authorization: `Bearer ${store.getState().user.loginToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(getFavoriteRecipes(response.data.favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default getMiddleware;
