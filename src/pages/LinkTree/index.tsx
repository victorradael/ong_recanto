import React from 'react';
import Contacts from '../../components/Contacts';

import Layout from '../../components/LayoutTree';

import { Content } from './styles';

const LinkTree: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Contacts />
      </Content>
    </Layout>
  );
};

export default LinkTree;
