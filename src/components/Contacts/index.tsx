import React from 'react';
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';

import { Content, ContactCard } from './styles';

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
      <ContactCard href="mailto:ongrecantodosanimais@gmail.com" target="_blank">
        <FaMailBulk size="2rem" />
        <p>Email</p>
      </ContactCard>

      <ContactCard
        href="https://www.instagram.com/ong.recanto/?hl=pt-br"
        target="blank"
      >
        <FaInstagram size="2rem" />
        <p>Instagram</p>
      </ContactCard>

      <ContactCard
        href="https://www.facebook.com/recantodosanimaisourobranco"
        target="blank"
      >
        <FaFacebookSquare size="2rem" />
        <p>Facebook</p>
      </ContactCard>

      <ContactCard href="https://twitter.com/ongrecanto" target="blank">
        <FaTwitter size="2rem" />
        <p>Twitter</p>
      </ContactCard>
    </Content>
  );
};

export default Contacts;
