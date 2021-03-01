import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
// import api from '../../services/api';
import Layout from '../../components/Layout';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  justify-content: top;
  align-items: center;
`;

interface IAngels {
  id: string;
  caption: string;
  // eslint-disable-next-line camelcase
  media_url: string;
}

const AdoptionOfCats: React.FC = () => {
  return (
    <Layout>
      <Content>
        <h1>EM DESENVOLVIMENTO</h1>
        <p>Pagina responsável por exibir os gatos para adoção.</p>
      </Content>
    </Layout>
  );
};

export default AdoptionOfCats;
