import React from 'react';
import Image7 from '../../assets/images/7.jpeg';
import Image9 from '../../assets/images/9.jpeg';
import Image10 from '../../assets/images/10.jpeg';
import Image14 from '../../assets/images/14.jpeg';
import Image15 from '../../assets/images/15.jpeg';
import Image17 from '../../assets/images/17.jpeg';
import Image18 from '../../assets/images/18.jpeg';
import Image19 from '../../assets/images/19.jpeg';

import Image21 from '../../assets/images/21.jpeg';
import Layout from '../../components/Layout';

import { Content, PresentationText, Supporters, Slider } from './styles';

const About: React.FC = () => {
  const images = [
    Image7,
    Image9,
    Image10,
    Image15,
    Image14,
    Image17,
    Image18,
    Image19,
    Image21,
  ];

  return (
    <Layout>
      <Content>
        <Slider>
          {images.map(image => {
            return <img src={image} alt="" />;
          })}
        </Slider>
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
