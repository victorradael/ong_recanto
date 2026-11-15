import React from 'react';
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';

import { Content, ContactCard } from './styles';

const Contacts: React.FC = () => {
  return (
    <Content>
      <ContactCard
        href="mailto:ongrecantodosanimais@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMailBulk size="2rem" />
        <p>Email</p>
      </ContactCard>

      <ContactCard
        href="https://www.instagram.com/ong.recanto/?hl=pt-br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size="2rem" />
        <p>Instagram</p>
      </ContactCard>

      <ContactCard
        href="https://www.facebook.com/recantodosanimaisourobranco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size="2rem" />
        <p>Facebook</p>
      </ContactCard>

      <ContactCard
        href="https://twitter.com/ongrecanto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size="2rem" />
        <p>Twitter</p>
      </ContactCard>
    </Content>
  );
};

export default Contacts;
