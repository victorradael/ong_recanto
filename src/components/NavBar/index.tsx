import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';
import { NavContainer, NavLogo } from './styles';

const NavBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NavContainer>
      <Link to="/" aria-label="ONG Recanto dos Animais — página inicial">
        <NavLogo src={LogoImage} alt="ONG Recanto dos Animais" />
      </Link>
      {children}
    </NavContainer>
  );
};

export default NavBar;
