import React from 'react';
import Player from 'react-player';
import {} from 'react-icons/ai';

import pixLogo from '../../assets/pixLogo.png';
import Layout from '../../components/Layout';
import { Content, Options, Pix, Button } from './styles';

const HowToHelp: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Player url="https://www.youtube.com/embed/J1mCHyRHW6U" />
        <h2>Como ajudar:</h2>
        <Options>
          <Button
            href="https://evoe.cc/ong_recanto_dos_animais"
            target="_blanks"
          >
            Evoe
          </Button>
          <Pix>
            <img src={pixLogo} alt="Pix Logo" />
            <div>
              <p>CNPJ:</p>

              <p>16928787000196</p>
            </div>
          </Pix>
        </Options>
      </Content>
    </Layout>
  );
};

export default HowToHelp;
