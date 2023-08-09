import axios from 'axios';
import { loadFavoriteRecipes } from '../actions/recipes';
import { saveLoginState, SUBMIT_LOGIN } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post('http://localhost:3001/login', {
          email: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          store.dispatch(saveLoginState(response.data));

          // on veut récupérer les recettes préférées => on dispatch une action
          // qui sera traitée par le middleware des recettes
          store.dispatch(loadFavoriteRecipes());
        })
        .catch((error) => {
          alert(error);
        });
      break;

    default:
      break;
  }

  next(action);
};

export default userMiddleware;
