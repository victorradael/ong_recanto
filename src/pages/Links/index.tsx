import React, { useEffect } from 'react';
import Contacts from '../../components/Contacts';
import Layout from '../../components/LayoutTree';
import { Content } from './styles';

const Links: React.FC = () => {
  useEffect(() => {
    document.title = 'Links — ONG Recanto dos Animais';
  }, []);

  return (
    <Layout>
      <Content>
        <Contacts />
      </Content>
    </Layout>
  );
};

export default Links;
