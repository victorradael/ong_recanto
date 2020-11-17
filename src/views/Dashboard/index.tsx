import React from "react";
import LogoImage from "../../assets/logo.png";

import { Container, TopBar, Logo } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoImage} alt="Logo da ONG Recanto dos Animais" />
      <TopBar>
        <h1>Bem Vindo!</h1>
      </TopBar>
    </Container>
  );
};

export default Dashboard;
