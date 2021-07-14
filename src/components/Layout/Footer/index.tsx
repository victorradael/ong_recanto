import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Contacts from '../../contacts';

import { Container, Content, Github, CopyRight } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Contacts />
        <Github href="https://github.com/victorradael" target="blank">
          <p>Desenvolvido por Victor Radael</p>
          <FaGithub size="1.2rem" />
        </Github>
        <CopyRight color="#fff">
          &copy; Copyright 2021 ONG Recanto dos Animais.
        </CopyRight>
      </Content>
    </Container>
  );
};

export default Footer;
