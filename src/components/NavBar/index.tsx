import React from 'react';
import { NavContainer } from './styles';

const NavBar: React.FC = ({ children }) => {
  return <NavContainer>{children}</NavContainer>;
};

export default NavBar;
