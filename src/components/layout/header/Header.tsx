import React from 'react';
import * as S from './Header.syles';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const checkAuthLocation = location.pathname.split('/')[1] === 'auth';

  return (
    <S.header>
      <S.title>Todos</S.title>
      <S.nav>
        {checkAuthLocation ? (
          location.pathname.split('/')[2] === 'signup' ? (
            <Link to='/auth/signin'>signIn</Link>
          ) : (
            <Link to='/auth/signup'>signUp</Link>
          )
        ) : (
          <Link to='/auth/signin'>logOut</Link>
        )}
      </S.nav>
    </S.header>
  );
};

export default Header;
