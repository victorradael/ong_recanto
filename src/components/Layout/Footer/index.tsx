import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, Content, Github, CopyRight } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        {/* <Github href="https://github.com/victorradael" target="blank">
          <p>Desenvolvido por Victor Radael</p>
          <FaGithub size="1.2rem" />
        </Github> */}
        <CopyRight color="#fff">
          &copy;
          {new Date().getFullYear()} ONG Recanto dos Animais. Todos os diretios
          reservados.
        </CopyRight>
      </Content>
    </Container>
  );
};

export default Footer;
