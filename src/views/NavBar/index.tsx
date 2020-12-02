import React from 'react';
import { NavContainer } from './styles';

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <div>
        <a href="/#">ADOÇÕES CÃES</a>
        <a href="/#">ADOÇÕES GATOS</a>
        <a href="/#">ADOTADOS</a>
        <a href="/#">COMO AJUDAR</a>
        <a href="/#">SOBRE NÓS</a>
        <a href="/#">PRESTAÇÃO DE CONTAS</a>
      </div>
    </NavContainer>
  );
};

export default NavBar;
