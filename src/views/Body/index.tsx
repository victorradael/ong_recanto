import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { userTestToken } from '../../credentials';

import {
  Container,
  PaperTransparent,
  Content,
  PresentationText,
} from './styles';

interface IAngels {
  id: string;
  caption: string;
  // eslint-disable-next-line camelcase
  media_url: string;
}

const Body: React.FC = () => {
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

  console.log(angelsList);

  return (
    <Container>
      <PaperTransparent>
        <Content>
          <PresentationText>
            <div>
              A ONG Recanto dos Animais foi fundada em 2012, por um grupo de
              voluntários que se uniram com o objetivo de amparar o Poder
              Público na função de zelar pela proteção de animais abandonados e
              vítimas de maus tratos.
            </div>
            <div>
              Para tanto, a ONG promove campanhas de educação e conscientização,
              mutirões de castração, feiras de adoção, ações judiciais na defesa
              dos animais e do meio ambiente, campanhas e eventos para
              arrecadação de verbas destinadas ao suporte de animais
              desamparados, assistência com medicação, orientação, tratamento e
              cuidados com animais que se encontram na rua ou em lares
              temporários, entre outras medidas.
            </div>
            <div>
              Vale ressaltar que a ONG Recanto dos Animais não possui ligação
              com empresas, clínicas ou administração pública, dependendo
              exclusivamente de doações para realizar seu trabalho, e, assim
              como todas as organizações não governamentais, não visa qualquer
              forma de lucro.
            </div>
            <img
              src="https://scontent.cdninstagram.com/v/t51.29350-15/127022832_842108113243760_5071211297813599139_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=D1oD6Y5HDzMAX-K2jHf&_nc_ht=scontent.cdninstagram.com&oh=c79777436e3164c8c24bfc1eb932aec2&oe=5FE20024"
              alt="Teste"
            />
          </PresentationText>
        </Content>
      </PaperTransparent>
    </Container>
  );
};

export default Body;
