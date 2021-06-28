import React from 'react';
import Player from 'react-player';

import Layout from '../../components/Layout';

import { Content, PresentationText, Supporters } from './styles';

const About: React.FC = () => {
  return (
    <Layout>
      <Content>
        <PresentationText>
          <p>
            A ONG Recanto dos Animais foi fundada em 2012, por um grupo de
            voluntários que se uniram com o objetivo de amparar o Poder Público
            na função de zelar pela proteção de animais abandonados e vítimas de
            maus tratos.
          </p>
          <p>
            Para tanto, a ONG promove campanhas de educação e conscientização,
            mutirões de castração, feiras de adoção, ações judiciais na defesa
            dos animais e do meio ambiente, campanhas e eventos para arrecadação
            de verbas destinadas ao suporte de animais desamparados, assistência
            com medicação, orientação, tratamento e cuidados com animais que se
            encontram na rua ou em lares temporários, entre outras medidas.
          </p>
          <p>
            Vale ressaltar que a ONG Recanto dos Animais não possui ligação com
            empresas, clínicas ou administração pública, dependendo
            exclusivamente de doações para realizar seu trabalho, e, assim como
            todas as organizações não governamentais, não visa qualquer forma de
            lucro.
          </p>
        </PresentationText>
        <Supporters>
          <h2>Apoiadores: </h2>
          <Player url="https://youtu.be/pLAbEV3z-ck" />
          <h3>Matheus Abreu</h3>
          <Player url="https://youtu.be/gutFlQmNz1M " />
          <h3>Pedro Alves</h3>
          <Player url="https://youtu.be/jKEqF824D48 " />
          <h3>José Loreto</h3>
          <Player url="https://youtu.be/Nlh4tXQH6mE " />
          <h3>Kaysar Dadour</h3>
        </Supporters>
      </Content>
    </Layout>
  );
};

export default About;
