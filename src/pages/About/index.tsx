import React, { useEffect } from 'react';
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
import VideoFacade from '../../components/VideoFacade';

import {
  Content,
  StorySection,
  SectionHeading,
  SliderWrap,
  SliderTrack,
  SupportersSection,
  SupporterItem,
  SupporterLabel,
  VideoWrap,
} from './styles';

const sliderImages = [
  { src: Image7, alt: 'Voluntária da ONG Recanto cuidando de animal resgatado' },
  { src: Image9, alt: 'Cachorro resgatado pela ONG Recanto dos Animais' },
  { src: Image10, alt: 'Animal recebendo cuidados de voluntária da Recanto' },
  { src: Image14, alt: 'Animal em lar temporário da ONG Recanto dos Animais' },
  { src: Image15, alt: 'Gato resgatado e tratado pela ONG Recanto dos Animais' },
  { src: Image17, alt: 'Animal atendido pela ONG Recanto dos Animais' },
  { src: Image18, alt: 'Voluntários da Recanto com animal resgatado' },
  { src: Image19, alt: 'Animal em processo de adoção pela ONG Recanto dos Animais' },
  { src: Image21, alt: 'Animal resgatado e cuidado pela ONG Recanto dos Animais' },
];

const supporters = [
  {
    videoId: 'pLAbEV3z-ck',
    name: 'Matheus Abreu',
    description: 'Ator e ativista pelos direitos dos animais',
  },
  {
    videoId: 'gutFlQmNz1M',
    name: 'Pedro Alves',
    description: 'Artista que apoia causas de proteção animal',
  },
  {
    videoId: 'jKEqF824D48',
    name: 'José Loreto',
    description: 'Ator e defensor da adoção responsável',
  },
  {
    videoId: 'Nlh4tXQH6mE',
    name: 'Kaysar Dadour',
    description: 'Ator e apoiador de ONGs de animais',
  },
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre nós — ONG Recanto dos Animais';
  }, []);

  const combined = [...sliderImages, ...sliderImages];

  return (
    <Layout>
      <Content>
        <SliderWrap aria-hidden="true">
          <SliderTrack>
            {combined.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </SliderTrack>
        </SliderWrap>

        <StorySection>
          <SectionHeading>Nossa história</SectionHeading>
          <p>
            Em 2012, um grupo de pessoas de Ouro Branco-MG se recusou a virar as
            costas para os animais abandonados nas ruas. Sem sede, sem salário e
            sem apoio do poder público, elas fundaram a ONG Recanto dos Animais
            com um único propósito: nenhum animal esquecido.
          </p>

          <SectionHeading>O que fazemos</SectionHeading>
          <p>
            Resgatamos, cuidamos e encontramos lares. No dia a dia, isso significa
            consultas veterinárias, vacinas, medicações, cirurgias e castração para
            animais de rua e casos de maus-tratos. Realizamos mutirões de
            castração, feiras de adoção e ações de educação. Quando necessário,
            entramos na Justiça para defender animais e o meio ambiente.
          </p>
          <p>
            Os animais que ainda aguardam adoção vivem em lares temporários — casas
            de voluntários que abrem as portas e bancam do próprio bolso a ração e
            o banho. As doações cobrem o restante: consultas, remédios e cirurgias.
          </p>

          <SectionHeading>Nossa independência</SectionHeading>
          <p>
            A Recanto não tem vínculo com empresas, clínicas veterinárias ou
            administração pública. Somos 100% voluntários e dependemos exclusivamente
            de doações. Isso nos dá liberdade para agir conforme a necessidade do
            animal — sem agenda corporativa, sem intermediários. Cada real doado
            vira cuidado veterinário real, de gente que você pode conhecer.
          </p>
        </StorySection>

        <SupportersSection>
          <SectionHeading>Quem apoia a Recanto</SectionHeading>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
            Personalidades que acreditam na nossa causa e ajudam a ampliar nossa
            voz.
          </p>
          {supporters.map((s) => (
            <SupporterItem key={s.videoId}>
              <VideoWrap>
                <VideoFacade videoId={s.videoId} title={`Apoio de ${s.name} à ONG Recanto dos Animais`} />
              </VideoWrap>
              <SupporterLabel>
                <strong>{s.name}</strong>
                <span>{s.description}</span>
              </SupporterLabel>
            </SupporterItem>
          ))}
        </SupportersSection>
      </Content>
    </Layout>
  );
};

export default About;
