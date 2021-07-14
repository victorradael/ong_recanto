import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';

import {
  Content,
  Whatsapp,
  Instagram,
  Facebook,
  Email,
  Twitter,
} from './styles';

const Contacts: React.FC = () => {
  const openWhatsappChat = (): void => {
    window.open(
      'http://wa.me/5531984912135?text=Olá,',
      '_system',
      'location=yes'
    );
  };
  return (
    <Content>
      <Email href="mailto:ongrecantodosanimais@gmail.com" target="_blank">
        <FaMailBulk size="2rem" />
      </Email>

      <Instagram
        href="https://www.instagram.com/ong.recanto/?hl=pt-br"
        target="blank"
      >
        <FaInstagram size="2rem" />
      </Instagram>
      <Facebook
        href="https://www.facebook.com/recantodosanimaisourobranco"
        target="blank"
      >
        <FaFacebookSquare size="2rem" />
      </Facebook>
      <Twitter href="https://twitter.com/ongrecanto" target="blank">
        <FaTwitter size="2rem" />
      </Twitter>

      <Whatsapp href="/#" onClick={() => openWhatsappChat()} target="blank">
        <FaWhatsapp size="2rem" />
      </Whatsapp>
    </Content>
  );
};

export default Contacts;
