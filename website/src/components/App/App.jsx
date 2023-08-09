// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Recipe from '../Recipe/Recipe';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';

import { loadRecipes } from '../../actions/recipes';

import Loading from './Loading/Loading';

import './style.scss';

function App() {
  const loading = useSelector((state) => state.recipes.loading);
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.recipes.list);

  useEffect(() => {
    dispatch(loadRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
