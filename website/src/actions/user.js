export const CHANGE_FIELD = 'WRITE_ON_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_LOGIN_STATE = 'SAVE_LOGIN_STATE';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';

export const changeField = (inputValue, fieldName) => ({
  type: CHANGE_FIELD,
  inputValue,
  fieldName,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

export const saveLoginState = (responseData) => ({
  type: SAVE_LOGIN_STATE,
  pseudo: responseData.pseudo,
  token: responseData.token,
});
