import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaFacebookSquare,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';

import {
  Container,
  Content,
  Contacts,
  Whatsapp,
  Instagram,
  Facebook,
  Github,
  Email,
  Twitter,
  CopyRight,
} from './styles';

const Footer: React.FC = () => {
  const openWhatsappChat = (): void => {
    window.open(
      'http://wa.me/5531984912135?text=Olá,',
      '_system',
      'location=yes'
    );
  };
  return (
    <Container>
      <Content>
        <Contacts>
          <Email href="mailto:ongrecantodosanimais@gmail.com" target="_blank">
            <FaMailBulk size="2rem" color="#FF66C3" />
          </Email>

          <Instagram
            href="https://www.instagram.com/ong.recanto/?hl=pt-br"
            target="blank"
          >
            <FaInstagram size="2rem" color="#FF66C3" />
          </Instagram>
          <Facebook
            href="https://www.facebook.com/recantodosanimaisourobranco"
            target="blank"
          >
            <FaFacebookSquare size="2rem" color="#FF66C3" />
          </Facebook>
          <Twitter href="https://twitter.com/ongrecanto" target="blank">
            <FaTwitter size="2rem" color="#FF66C3" />
          </Twitter>

          <Whatsapp href="/#" onClick={() => openWhatsappChat()} target="blank">
            <FaWhatsapp size="2rem" color="#FF66C3" />
          </Whatsapp>
        </Contacts>

        <Github href="https://github.com/victorradael" target="blank">
          <p>Desenvolvido por Victor Radael</p>
          <FaGithub size="1.2rem" color="#fff" />
        </Github>
        <CopyRight color="#fff">
          &copy; Copyright 2021 ONG Recanto dos Animais.
        </CopyRight>
      </Content>
    </Container>
  );
};

export default Footer;
