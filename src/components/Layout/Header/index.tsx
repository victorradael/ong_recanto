import React from 'react';
import LogoImage from '../../../assets/logo.png';

import { Container, TopBar, Logo, Strong } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Logo src={LogoImage} alt="Logo da ONG Recanto dos Animais" />
        <h1>
          <span>
            <strong>Olá!</strong>
          </span>
          <br />
          <br />
          <span>
            Somos um grupo de voluntários unidos por um sentimento em comum:
            <Strong> amor aos animais.</Strong>
          </span>
          <br />
          <br />
          <span>
            <Strong>Junte-se a nós nesta causa!</Strong>
          </span>
        </h1>
      </TopBar>
    </Container>
  );
};

export default Dashboard;
