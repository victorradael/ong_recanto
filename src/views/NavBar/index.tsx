import React from 'react';
import { NavContainer } from './styles';

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <a href="/#">ADOÇÕES CÃES</a>
      <a href="/#">ADOÇÕES GATOS</a>
      <a href="/#">COMO AJUDAR</a>
      <a href="/#">SOBRE NÓS</a>
      <a href="/#">PRESTAÇÃO DE CONTAS</a>
    </NavContainer>
  );
};

export default NavBar;
