import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

import pixLogo from '../../assets/pixLogo.png';
import Layout from '../../components/Layout';
import {
  Content,
  PageTitle,
  Lead,
  TocList,
  TocItem,
  AccordionList,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  CtaSection,
  CtaTitle,
  CtaActions,
  PixBtn,
  WhatsappBtn,
  Disclaimer,
} from './styles';

const PIX_KEY = '16928787000196';
const WHATSAPP_URL = 'https://wa.me/5531984912135';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faq: FaqItem[] = [
  {
    id: 'saude',
    question: 'Quais são os benefícios para a saúde do animal?',
    answer: (
      <>
        <p>
          A castração é a forma mais eficaz de prevenir tumores no sistema
          reprodutivo — ovários, útero e mamas nas fêmeas; próstata nos machos.
          Também elimina o risco de infecções uterinas (piometra), uma das
          emergências mais perigosas em cadelas e gatas.
        </p>
        <p>
          Fêmeas castradas antes do primeiro cio têm risco significativamente
          menor de desenvolver tumores mamários ao longo da vida, segundo
          estudos veterinários. Para dados atualizados, consulte seu médico
          veterinário.
        </p>
      </>
    ),
  },
  {
    id: 'rua',
    question: 'Por que a castração ajuda os animais de rua?',
    answer: (
      <p>
        Cada ninhada não planejada aumenta o número de animais abandonados. Ao
        castrar cães e gatos SRD (sem raça definida), reduzimos diretamente a
        superpopulação de rua — e, com isso, o sofrimento de animais que
        nascem sem lar.
      </p>
    ),
  },
  {
    id: 'cirurgia',
    question: 'Como é a cirurgia?',
    answer: (
      <p>
        A castração é uma cirurgia feita sob anestesia geral. Em machos, é um
        procedimento simples e rápido. Em fêmeas, dura um pouco mais por causa
        do posicionamento dos órgãos. O corte pode ser no baixo ventre ou na
        lateral, dependendo da técnica. É um procedimento seguro quando
        realizado por médico veterinário em ambiente adequado.
      </p>
    ),
  },
  {
    id: 'recuperacao',
    question: 'Como é a recuperação?',
    answer: (
      <p>
        O veterinário costuma prescrever anti-inflamatório, antibiótico e
        analgésico. É preciso evitar que o animal lamba os pontos — colar
        elisabetano ou roupinha cirúrgica ajudam. O animal deve ficar em
        ambiente tranquilo nos primeiros dias. Alimentação normal, salvo
        indicação do veterinário.
      </p>
    ),
  },
  {
    id: 'idade',
    question: 'Qual a melhor idade para castrar?',
    answer: (
      <p>
        Em geral, a partir dos seis meses de idade. Não é preciso esperar o
        primeiro cio das fêmeas — isso é um mito. Filhotes precisam de menos
        anestesia e se recuperam mais rápido. Não há idade máxima, mas quanto
        mais idoso o animal, maior a necessidade de avaliar os riscos com o
        veterinário.
      </p>
    ),
  },
  {
    id: 'custo',
    question: 'Quanto custa a castração?',
    answer: (
      <p>
        O valor varia conforme a clínica, o porte e o sexo do animal. Fêmeas
        costumam ser mais caras que machos por demandarem mais tempo de
        cirurgia. Animais com doenças pré-existentes podem ter custo maior.
        Peça orçamento diretamente ao veterinário.
      </p>
    ),
  },
  {
    id: 'ajudar',
    question: 'Como posso ajudar a ONG com as castrações?',
    answer: (
      <p>
        Suas doações financiam diretamente os mutirões de castração da Recanto.
        Você pode contribuir via Pix (CNPJ 16.928.787/0001-96) ou transferência
        para o Banco do Brasil AG 2372-8 CC 24695-6. Cada cirurgia financiada
        significa um animal a menos nas ruas.
      </p>
    ),
  },
];

const WhyCastrate: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Castrar, por quê? — ONG Recanto dos Animais';
  }, []);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Layout>
      <Content>
        <PageTitle>Por que castrar?</PageTitle>
        <Lead>
          Castrar é um dos atos mais responsáveis que um tutor pode fazer — e um
          dos mais eficazes para reduzir o abandono. Tire suas dúvidas abaixo.
        </Lead>

        <TocList aria-label="Ir para a pergunta">
          {faq.map((item) => (
            <TocItem key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpenId(item.id)}>
                {item.question}
              </a>
            </TocItem>
          ))}
        </TocList>

        <AccordionList>
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <AccordionItem key={item.id} id={item.id}>
                <AccordionButton
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  $open={isOpen}
                >
                  {item.question}
                  <FaChevronDown aria-hidden="true" />
                </AccordionButton>
                <AccordionPanel
                  id={`panel-${item.id}`}
                  role="region"
                  aria-labelledby={item.id}
                  hidden={!isOpen}
                >
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </AccordionList>

        <Disclaimer>
          A castração é um procedimento cirúrgico e deve ser realizada por
          médico veterinário em ambiente apropriado. Consulte um profissional
          antes de tomar qualquer decisão.
        </Disclaimer>

        <CtaSection>
          <CtaTitle>Ajude a custear uma castração</CtaTitle>
          <p>
            Cada doação financia diretamente nossos mutirões de castração em
            Ouro Branco e região.
          </p>
          <CtaActions>
            <PixBtn onClick={copyPix} aria-live="polite">
              <img src={pixLogo} alt="" aria-hidden="true" />
              {copied ? 'Chave copiada!' : 'Copiar chave Pix'}
            </PixBtn>
            <WhatsappBtn
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Falar no WhatsApp
            </WhatsappBtn>
          </CtaActions>
        </CtaSection>
      </Content>
    </Layout>
  );
};

export default WhyCastrate;
