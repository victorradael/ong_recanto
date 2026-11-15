import React from 'react';

import { Container, Content, CopyRight } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        {/* <Github href="https://github.com/victorradael" target="_blank" rel="noopener noreferrer">
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
