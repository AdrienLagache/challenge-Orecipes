import { CHANGE_FIELD, SAVE_LOGIN_STATE, SUBMIT_LOGOUT } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  loginToken: '',
  loggedMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.inputValue,
      };

    case SAVE_LOGIN_STATE:
      return {
        ...state,
        isLogged: true,
        loginToken: action.token,
        loggedMessage: `Bienvenue ${action.pseudo}`,
        // on efface les identifiants pour la sécurité
        email: '',
        password: '',
      };

    case SUBMIT_LOGOUT:
      return {
        ...state,
        isLogged: false,
        loginToken: '',
        loggedMessage: '',
      };

    default:
      return state;
  }
};

export default reducer;
