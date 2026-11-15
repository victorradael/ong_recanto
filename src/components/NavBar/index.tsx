import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';
import { NavContainer, NavLogo, HamburgerBtn, NavMenu } from './styles';

const NavBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <Link to="/" aria-label="ONG Recanto dos Animais — página inicial">
        <NavLogo src={LogoImage} alt="ONG Recanto dos Animais" />
      </Link>
      <HamburgerBtn
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        $open={open}
      >
        <span />
        <span />
        <span />
      </HamburgerBtn>
      <NavMenu $open={open} onClick={() => setOpen(false)}>
        {children}
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
