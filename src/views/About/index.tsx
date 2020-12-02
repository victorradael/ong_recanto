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

const About: React.FC = () => {
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
          </PresentationText>
        </Content>
      </PaperTransparent>
    </Container>
  );
};

export default About;
