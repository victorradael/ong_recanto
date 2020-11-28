import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';

import {
  Container,
  Content,
  Contacts,
  SocialMedia,
  Whatsapp,
  Github,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Contacts>
          <SocialMedia>
            <a
              href="https://www.instagram.com/ong.recanto/?hl=pt-br"
              target="blank"
            >
              <FaInstagram size="2rem" color="#FF66C3" />
            </a>
            <a
              href="https://www.facebook.com/recantodosanimaisourobranco"
              target="blank"
            >
              <FaFacebookSquare size="2rem" color="#FF66C3" />
            </a>
          </SocialMedia>
          <Whatsapp href="/#" target="blank">
            <FaWhatsapp size="1.4rem" color="#FF66C3" />
            <p>+55 (31) 98491-2135</p>
          </Whatsapp>
        </Contacts>

        <Github href="https://github.com/victorradael" target="blank">
          <p>Desenvolvido por Victor Radael</p>
          <FaGithub size="1.2rem" color="#FF66C3" />
        </Github>
      </Content>
    </Container>
  );
};

export default Footer;
