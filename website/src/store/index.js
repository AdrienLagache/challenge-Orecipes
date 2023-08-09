import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import getMiddleware from '../middlewares/getMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

import reducer from '../reducers';

// on construit le enhancer pour les middlewares
const middlewareEnhancer = applyMiddleware(getMiddleware, userMiddleware);

// on crée l'améliorateur pour avoir le dev tool activé
const enhancer = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer
);

export default store;
