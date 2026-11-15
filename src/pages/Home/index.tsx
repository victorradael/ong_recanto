import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
  FaEnvelope,
  FaPaw,
  FaSyringe,
  FaHospital,
  FaHandHoldingHeart,
  FaHeart,
  FaHome,
  FaUsers,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import HeroImg from '../../assets/images/9.jpeg';
import Image7 from '../../assets/images/7.jpeg';
import Image9 from '../../assets/images/9.jpeg';
import Image10 from '../../assets/images/10.jpeg';
import Image14 from '../../assets/images/14.jpeg';
import Image15 from '../../assets/images/15.jpeg';
import Image17 from '../../assets/images/17.jpeg';
import Image18 from '../../assets/images/18.jpeg';
import Image19 from '../../assets/images/19.jpeg';
import Image21 from '../../assets/images/21.jpeg';

import PixLogo from '../../assets/pixLogo.png';
import VideoFacade from '../../components/VideoFacade';
import Footer from '../../components/Layout/Footer';

import {
  PageWrapper,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroHeadline,
  HeroSub,
  HeroActions,
  PrimaryBtn,
  SecondaryBtn,
  TrustBar,
  TrustItem,
  Section,
  SectionTitle,
  DonationGrid,
  DonationCard,
  StepsGrid,
  StepCard,
  StepNumber,
  GalleryGrid,
  GalleryItem,
  GalleryImg,
  Lightbox,
  LightboxBackdrop,
  LightboxImg,
  LightboxClose,
  LightboxNav,
  VideoWrapper,
  ContactsSection,
  ContactLink,
  PixCopyBtn,
  CopyFeedback,
} from './styles';

const PIX_KEY = '16928787000196';
const WHATSAPP_URL = 'https://wa.me/5531984912135';

const galleryImages = [
  { src: Image7, alt: 'Animal resgatado pela ONG Recanto dos Animais sendo cuidado por voluntária' },
  { src: Image9, alt: 'Cachorro resgatado pela ONG Recanto dos Animais' },
  { src: Image10, alt: 'Voluntária cuidando de animal da ONG Recanto dos Animais' },
  { src: Image14, alt: 'Animal em lar temporário da ONG Recanto dos Animais' },
  { src: Image15, alt: 'Gato resgatado pela ONG Recanto dos Animais' },
  { src: Image17, alt: 'Animal atendido pela ONG Recanto dos Animais' },
  { src: Image18, alt: 'Voluntários da ONG Recanto dos Animais com animal resgatado' },
  { src: Image19, alt: 'Animal em processo de adoção pela ONG Recanto dos Animais' },
  { src: Image21, alt: 'Animal resgatado e cuidado pela ONG Recanto dos Animais' },
];

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'ONG Recanto dos Animais — Cada resgate começa com você';
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

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <img
          src={HeroImg}
          alt="Animal resgatado pela ONG Recanto dos Animais, olhando para a câmera"
          fetchPriority="high"
          loading="eager"
          aria-hidden="true"
        />
        <HeroOverlay />
        <HeroContent>
          <HeroHeadline>
            Cada resgate começa com alguém que não virou as costas.
          </HeroHeadline>
          <HeroSub>
            Desde 2012, voluntários de Ouro Branco-MG cuidam de animais
            abandonados com recursos de quem acredita.
          </HeroSub>
          <HeroActions>
            <PrimaryBtn onClick={copyPix} aria-live="polite">
              <img src={PixLogo} alt="" aria-hidden="true" />
              Copiar chave Pix
              {copied && <CopyFeedback>Copiado!</CopyFeedback>}
            </PrimaryBtn>
            <SecondaryBtn
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Quero ser voluntário
            </SecondaryBtn>
          </HeroActions>
        </HeroContent>
      </HeroSection>

      {/* Trust bar */}
      <TrustBar>
        <TrustItem>
          <FaPaw aria-hidden="true" />
          Desde 2012
        </TrustItem>
        <TrustItem>
          <FaUsers aria-hidden="true" />
          100% voluntária
        </TrustItem>
        <TrustItem>
          <FaHandHoldingHeart aria-hidden="true" />
          Sem fins lucrativos
        </TrustItem>
        <TrustItem>
          <FaHome aria-hidden="true" />
          Ouro Branco e BH-MG
        </TrustItem>
      </TrustBar>

      {/* Where does the donation go */}
      <Section>
        <SectionTitle>Para onde vai sua doação</SectionTitle>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Cada real doado é convertido diretamente em cuidado. Sem intermediários, sem desvios.
        </p>
        <DonationGrid>
          <DonationCard>
            <FaHospital aria-hidden="true" />
            <h3>Consultas veterinárias</h3>
            <p>Exames, diagnósticos e acompanhamento clínico para animais resgatados.</p>
          </DonationCard>
          <DonationCard>
            <FaSyringe aria-hidden="true" />
            <h3>Vacinas e medicações</h3>
            <p>Protocolo completo de vacinas, vermífugos e tratamentos contínuos.</p>
          </DonationCard>
          <DonationCard>
            <FaHospital aria-hidden="true" />
            <h3>Cirurgias e castração</h3>
            <p>Procedimentos de castração, emergências cirúrgicas e pós-operatório.</p>
          </DonationCard>
          <DonationCard>
            <FaHeart aria-hidden="true" />
            <h3>Ração e banho*</h3>
            <p>* Custeados diretamente pelos voluntários que abrigam os animais em seus lares.</p>
          </DonationCard>
        </DonationGrid>
      </Section>

      {/* How to help in 3 steps */}
      <Section $alt>
        <SectionTitle>Como ajudar em 3 passos</SectionTitle>
        <StepsGrid>
          <StepCard>
            <StepNumber>1</StepNumber>
            <h3>Doe</h3>
            <p>
              Transfira via Pix (CNPJ{' '}
              <PixCopyBtn onClick={copyPix} aria-live="polite">
                16.928.787/0001-96{copied && ' ✓'}
              </PixCopyBtn>
              ) ou conta Banco do Brasil AG 2372-8 CC 24695-6.
            </p>
          </StepCard>
          <StepCard>
            <StepNumber>2</StepNumber>
            <h3>Adote ou apadrinhe</h3>
            <p>
              Dê um lar permanente, apadrinhe financeiramente ou abra sua casa
              como lar temporário.
            </p>
          </StepCard>
          <StepCard>
            <StepNumber>3</StepNumber>
            <h3>Voluntarie-se</h3>
            <p>
              Ajude com seu tempo, habilidades ou divulgação. Entre em contato
              pelo WhatsApp.
            </p>
          </StepCard>
        </StepsGrid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/ajudar" style={{ color: '#00E8FF', fontWeight: 700, fontSize: '1.1rem' }}>
            Ver todas as formas de ajudar →
          </Link>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionTitle>Galeria</SectionTitle>
        <GalleryGrid>
          {galleryImages.map((img, i) => (
            <GalleryItem
              key={i}
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
              tabIndex={0}
              role="button"
              aria-label={`Ver foto: ${img.alt}`}
            >
              <GalleryImg src={img.src} alt={img.alt} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox role="dialog" aria-modal="true" aria-label="Visualizador de fotos">
          <LightboxBackdrop onClick={closeLightbox} />
          <LightboxImg
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
          />
          <LightboxClose onClick={closeLightbox} aria-label="Fechar visualizador">
            <FaTimes aria-hidden="true" />
          </LightboxClose>
          <LightboxNav $left onClick={prevImage} aria-label="Foto anterior">
            <FaChevronLeft aria-hidden="true" />
          </LightboxNav>
          <LightboxNav onClick={nextImage} aria-label="Próxima foto">
            <FaChevronRight aria-hidden="true" />
          </LightboxNav>
        </Lightbox>
      )}

      {/* Featured video */}
      <Section $alt>
        <SectionTitle>Veja quem apoia a Recanto</SectionTitle>
        <VideoWrapper>
          <VideoFacade
            videoId="J1mCHyRHW6U"
            title="Como ajudar a ONG Recanto dos Animais"
          />
        </VideoWrapper>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/sobre" style={{ color: '#00E8FF', fontWeight: 700 }}>
            Ver todos os apoiadores →
          </Link>
        </div>
      </Section>

      {/* Contacts */}
      <ContactsSection>
        <SectionTitle $light>Fale com a gente</SectionTitle>
        <nav aria-label="Links de contato">
          <ContactLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </ContactLink>
          <ContactLink
            href="mailto:ongrecantodosanimais@gmail.com"
          >
            <FaEnvelope aria-hidden="true" />
            E-mail
          </ContactLink>
          <ContactLink
            href="https://www.instagram.com/ong.recanto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden="true" />
            Instagram
          </ContactLink>
          <ContactLink
            href="https://www.facebook.com/recantodosanimaisourobranco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare aria-hidden="true" />
            Facebook
          </ContactLink>
        </nav>
      </ContactsSection>

      <Footer />
    </PageWrapper>
  );
};

export default Home;
