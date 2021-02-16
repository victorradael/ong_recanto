import React from 'react';
import { NavContainer } from './styles';

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <div>
        <a href="/#">SOBRE NÓS</a>
        <a href="/#">ADOÇÕES CÃES</a>
        <a href="/#">ADOÇÕES GATOS</a>
        <a href="/#">ADOTADOS</a>
        <a href="/#">PRESTAÇÃO DE CONTAS</a>
        <a href="/#">COMO AJUDAR</a>
      </div>
    </NavContainer>
  );
};

export default NavBar;
