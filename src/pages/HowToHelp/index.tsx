import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp, FaHandHoldingHeart, FaBox, FaHeart } from 'react-icons/fa';

import pixLogo from '../../assets/pixLogo.png';
import Layout from '../../components/Layout';
import {
  Content,
  PageTitle,
  TransparencyBox,
  HelpSection,
  SectionTitle,
  PixCard,
  PixLogo,
  PixKey,
  CopyBtn,
  CopyFeedback,
  BankCard,
  BankRow,
  ItemsList,
  VolunteerCard,
  VolunteerLink,
} from './styles';

const PIX_KEY = '16928787000196';
const WHATSAPP_URL = 'https://wa.me/5531984912135';

const HowToHelp: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Como ajudar — ONG Recanto dos Animais';
  }, []);

  const copyPix = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <Layout>
      <Content>
        <PageTitle>Como ajudar</PageTitle>

        <TransparencyBox>
          <FaHandHoldingHeart aria-hidden="true" />
          <p>
            Cada doação vai direto para consultas veterinárias, vacinas,
            medicações e cirurgias dos animais resgatados. Ração e banho são
            custeados pelos próprios voluntários. Sem intermediários, sem desvios.
          </p>
        </TransparencyBox>

        {/* 1 — Pix */}
        <HelpSection>
          <SectionTitle>
            <img src={pixLogo} alt="Pix" aria-hidden="true" />
            Doe via Pix
          </SectionTitle>
          <PixCard>
            <p>
              Copie a chave abaixo e cole no seu aplicativo de banco. O Pix cai na conta
              da ONG (CNPJ verificado) em segundos.
            </p>
            <PixKey>
              <PixLogo src={pixLogo} alt="" aria-hidden="true" />
              <span>CNPJ: 16.928.787/0001-96</span>
              <CopyBtn onClick={copyPix} aria-live="polite">
                {copied ? '✓ Copiado!' : 'Copiar chave'}
                {copied && <CopyFeedback aria-hidden="true" />}
              </CopyBtn>
            </PixKey>
          </PixCard>
        </HelpSection>

        {/* 2 — Transferência */}
        <HelpSection>
          <SectionTitle>Transferência bancária</SectionTitle>
          <BankCard>
            <BankRow><span>Banco</span><strong>Banco do Brasil</strong></BankRow>
            <BankRow><span>Agência</span><strong>2372-8</strong></BankRow>
            <BankRow><span>Conta corrente</span><strong>24695-6</strong></BankRow>
            <BankRow><span>Titular</span><strong>Recanto dos Animais</strong></BankRow>
            <BankRow><span>CNPJ</span><strong>16.928.787/0001-96</strong></BankRow>
          </BankCard>
        </HelpSection>

        {/* 3 — Itens */}
        <HelpSection>
          <SectionTitle>
            <FaBox aria-hidden="true" />
            Doação de itens
          </SectionTitle>
          <p>
            Você também pode contribuir com itens. Entre em contato pelo WhatsApp
            para combinar a entrega:
          </p>
          <ItemsList>
            <li>Roupas e calçados em bom estado — para o nosso bazar</li>
            <li>Ração para cães e gatos</li>
            <li>Medicamentos veterinários (verificar validade)</li>
            <li>Materiais de higiene animal</li>
          </ItemsList>
        </HelpSection>

        {/* 4 — Voluntariado */}
        <HelpSection>
          <SectionTitle>
            <FaHeart aria-hidden="true" />
            Seja voluntário
          </SectionTitle>
          <VolunteerCard>
            <p>
              Doe seu tempo, habilidades ou sua casa. Precisamos de voluntários para
              acolher animais como lar temporário, ajudar em eventos, divulgar nas redes
              sociais e muito mais. Fale com a gente:
            </p>
            <VolunteerLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Falar no WhatsApp
            </VolunteerLink>
          </VolunteerCard>
        </HelpSection>
      </Content>
    </Layout>
  );
};

export default HowToHelp;
