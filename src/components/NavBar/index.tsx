import React from 'react';
import { NavContainer } from './styles';

const NavBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NavContainer>{children}</NavContainer>;
};

export default NavBar;
