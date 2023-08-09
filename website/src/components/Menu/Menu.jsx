// import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const isLogged = useSelector((state) => state.user.isLogged);

  // const appRef = useRef(null);

  // const handleLinkClick = () => {
  //   const element = appRef.current;
  //   element.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <nav className="menu">
      <NavLink
        to="/"
        // onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        }
      >
        Accueil
      </NavLink>
      {isLogged && (
        <NavLink
          to="/favorites"
          // onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Mes recettes favorites
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          to={`/recipe/${recipe.slug}`}
          // onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
