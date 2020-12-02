import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { userTestToken } from '../../credentials';

import { Container, PaperTransparent, Content, AngelPhoto } from './styles';

interface IAngels {
  id: string;
  caption: string;
  // eslint-disable-next-line camelcase
  media_url: string;
}

const Adopted: React.FC = () => {
  const [angelsList, setAngelsLIst] = useState<IAngels[]>();

  const getAngels = async (): Promise<void> => {
    const catalog = await api.get(
      `/me/media?fields=id,caption,media_url&access_token=${userTestToken}`
    );

    setAngelsLIst(catalog.data.data);
  };

  useEffect(() => {
    getAngels();
  }, []);

  return (
    <Container>
      <PaperTransparent>
        <Content>
          {angelsList?.map(angel => {
            return (
              <AngelPhoto key={angel.id} src={angel.media_url} alt="Teste" />
            );
          })}
        </Content>
      </PaperTransparent>
    </Container>
  );
};

export default Adopted;
