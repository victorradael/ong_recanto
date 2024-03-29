import React from 'react';
import {} from 'react-icons/ai';

import pixLogo from '../../assets/pixLogo.png';
import Layout from '../../components/Layout';
import { Content, Pix, Text, PlayerCustom } from './styles';

const HowToHelp: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Text>
          <p>
            A ONG Recanto dos Animais precisa de recursos para manter o
            atendimento aos animais resgatados e o programa de castrações
            regular.
          </p>
          <p>
            O dinheiro arrecadado será usado prioritariamente no pagamento das
            despesas veterinárias dos animais resgatados - consultas,
            medicações, vacinas e cirurgias.
          </p>
          <p>
            O custeio direto dos animais - ração e banho - são despesas pagas
            pelos voluntários que recebem os animais em suas residências.
            Mediante o aumento do aporte mensal, a ONG conseguiria colaborar com
            o custeio destes animais.
          </p>
          <p>
            Você pode doar também: roupas em bom estado de uso e conservação
            para nosso bazar, rações, remédios veterinários e principalmente
            doando seu tempo pra ser um voluntário da Recanto.
          </p>
        </Text>

        <PlayerCustom src="https://www.youtube.com/embed/J1mCHyRHW6U" />
        <h2>Como ajudar:</h2>

        <Pix>
          <img src={pixLogo} alt="Pix Logo" />
          <div>
            <p>CNPJ:</p>

            <p>16928787000196</p>
          </div>
        </Pix>
      </Content>
    </Layout>
  );
};

export default HowToHelp;
