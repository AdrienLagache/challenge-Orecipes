import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import { changeField, submitLogin, submitLogout } from '../../actions/user';
import LoginForm from '../LoginForm/LoginForm';

import './style.scss';

const AppHeader = () => {
  const userObject = useSelector((state) => state.user);

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        {...userObject}
        changeField={changeField}
        handleLogin={submitLogin}
        handleLogout={submitLogout}
      />
    </header>
  );
};

export default AppHeader;
