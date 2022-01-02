import React from 'react';

import Layout from '../../components/Layout';

import { Content, PresentationText } from './styles';

const About: React.FC = () => {
  return (
    <Layout>
      <Content>
        <PresentationText>
          <h1>Por que devo castrar meus cachorros e gatos?</h1>
          <p>
            Quando falamos em castração, o primeiro pensamento que vem é o
            controle reprodutivo dos animais, principalmente das fêmeas. Mas a
            castração é, principalmente, a forma mais eficaz de prevenir doenças
            sérias como tumores nas mamas, ovários e próstatas, infecções e
            doenças venéreas, sobretudo quando o tutor decide castrar seu
            bichinho precocemente.
          </p>
          <p>
            Quando falamos de cachorros e gatos SRD (sem raça definida) é,
            realmente, muito importante pensarmos no controle reprodutivo dos
            animais como forma de prevenir o aumento da população dos animais de
            rua e para combater as práticas de abandono das crias não
            planejadas.
          </p>
          <h2>Como a castração é realizada?</h2>
          <p>
            A castração, também chamada de esterilização, é uma cirurgia que tem
            por finalidade a retirada dos órgãos sexuais dos machos e das
            fêmeas. Dos animais machos são retirados os testículos e das fêmeas
            são retirados os ovários e o útero. O procedimento em cães e gatos
            machos é muito simples e rápido. Já nas fêmeas pode demorar um pouco
            mais devido ao posicionamento dos órgãos reprodutivos e os cortes
            podem ser tanto na parte baixa do abdômen quanto na lateral. Tudo é
            feito com anestesia geral e exige cuidados simples no pós
            operatório.
          </p>
          <h2>Como é a recuperação do animal?</h2>
          <p>
            Da mesma forma que todas as demais cirurgias, a castração exige
            alguns cuidados no pós operatório. Normalmente é prescrito pelo
            médico veterinário um anti-inflamatório, um antibiótico e um remédio
            para dor e é necessário a continuidade desses medicamentos em casa.
            Além disso, os tutores ou responsáveis devem evitar que o animal
            morda ou lamba o local dos pontos. Para isso, pode-se utilizar
            roupinhas cirúrgicas ou o colar elisabetano no pescoço. É
            importante, ainda, que o animal fique em um local tranquilo e não se
            agite nem se esforce para não prejudicar a sua recuperação. Quanto a
            alimentação, não há necessidade de mudanças, a não ser por algum
            motivo indicado pelo veterinário.
          </p>
          <h2>Qual o valor da castração?</h2>
          <p>
            O valor da castração depende de uma série de fatores, como a clínica
            veterinária escolhida, a sua localização, o sexo, tamanho e a saúde
            do animal. Se o animal apresenta alguma doença, por exemplo, a
            castração pode ficar mais cara.
          </p>
          <p>
            O tamanho do animal interfere na quantidade de anestesia aplicada e,
            depende da forma de aplicação, se será injetável ou inalatória. O
            sexo do animal interfere, também, pois as fêmeas, por exemplo, são
            mais caras que machos pelo fato de demandarem mais tempo de
            cirurgia.
          </p>
          <h2>Quando devo castrar meus bichinhos?</h2>
          <p>
            Os animais podem ser castrados antes da maturidade sexual, que
            acontece em torno dos seis meses de vida. Muitos acreditam que
            precisam aguardar o primeiro cio das fêmeas, mas isso não precisa
            acontecer. A castração em filhotes tem como vantagem o fato deles
            necessitarem de menores doses de anestésicos e, devido a isso, sua
            recuperação acontece de maneira mais rápida e eficaz. Não há uma
            idade máxima para a castração dos animais porém, quanto mais tarde,
            maior o risco da cirurgia. É de suma importância considerar a idade
            e a saúde do bichinho para saber se os benefícios da castração são
            maiores que o risco.
          </p>
          <p>
            Vale ressaltar que as fêmeas não castradas têm 3x mais chances de
            sofrer de câncer de ovário, mama e útero do que as fêmeas castradas
            quando novas. O mesmo vale para os machos não castrados em relação
            ao câncer de próstata.
          </p>
          <h2>
            Como acontecem as castrações gratuitas pela ONG Recanto dos Animais
            em Ouro Branco?
          </h2>
          <p>
            A Prefeitura Municipal de Ouro Branco disponibiliza uma verba a ser
            utilizada no mutirão de castração, conforme convênio assinado com a
            ONG Recantos dos Animais. A ONG contrata o Castra Móvel e convoca os
            tutores com animais na lista de espera para a cirurgia, conforme
            orçamento disponibilizado.
          </p>
          <p>
            A lista de espera é preenchida por:
            <br />
            - animais adotados através da ONG;
            <br />
            - animais em situação de rua/comunitários;
            <br />
            - animais SRD dos moradores da cidade de Ouro Branco.
            <br />
          </p>
          <p>
            Em 2021 tivemos 4 mutirões organizados pela ONG e castramos cerca de
            150 cães e gatos.
          </p>
          <h2>
            Posso ajudar a ONG Recanto dos Animais em relação as castrações?
          </h2>
          <p>
            Você pode nos ajudar com doações através de transferência ou PIX
            para a conta da ONG.
          </p>
          <p>
            BANCO DO BRASIL
            <br />
            AG: 2372-8
            <br />
            CC: 24695-6
            <br />
            Recanto dos animais <br />
            CNPJ: 16.928.787/0001-96 (PIX)
          </p>

          <p>
            <b>
              Precisamos ressaltar que a castração é um procedimento cirúrgico e
              deve ser realizado por médico veterinário em ambiente apropriado.
            </b>
          </p>
        </PresentationText>
      </Content>
    </Layout>
  );
};

export default About;
