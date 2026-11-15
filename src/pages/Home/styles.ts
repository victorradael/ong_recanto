import styled, { css, keyframes } from 'styled-components';
import theme from '../../utils/theme';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const logoPulse = keyframes`
  0%, 100% { opacity: 0.75; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.06); }
`;

const heroFadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9) translateY(-8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

/* ── Hero ─────────────────────────────────────────────────────────────── */
export const HeroSection = styled.section`
  width: 100%;
  min-height: 92vh;
  /* iOS Safari: 100vh counts browser chrome; svh targets small viewport (address bar visible) */
  min-height: 92svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse 100% 80% at 50% 30%, #0f4a62 0%, #07404f 50%, #040f14 100%);
  position: relative;
  overflow: hidden;

  /* outer decorative ring */
  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0, 232, 255, 0.07);
    width: clamp(32rem, 80vw, 60rem);
    height: clamp(32rem, 80vw, 60rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    pointer-events: none;
  }

  /* inner decorative ring */
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0, 232, 255, 0.12);
    width: clamp(20rem, 52vw, 38rem);
    height: clamp(20rem, 52vw, 38rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    pointer-events: none;
  }
`;

export const HeroLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  width: clamp(14rem, 38vw, 20rem);
  height: clamp(14rem, 38vw, 20rem);

  /* glowing disc behind logo */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 232, 255, 0.18) 0%,
      rgba(0, 232, 255, 0.07) 45%,
      transparent 72%
    );
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${logoPulse} 3.2s ease-in-out infinite;
    }
  }
`;

export const HeroLogo = styled.img`
  position: relative;
  z-index: 1;
  height: clamp(10rem, 28vw, 15rem);
  width: auto;
  display: block;
  filter:
    drop-shadow(0 0 1.2rem rgba(0, 232, 255, 0.55))
    drop-shadow(0 0 3rem rgba(0, 232, 255, 0.28))
    drop-shadow(0 0 6rem rgba(0, 232, 255, 0.12));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${heroFadeIn} 0.7s ease-out;
  }
`;

export const HeroOrgName = styled.p`
  font-size: clamp(1rem, 2.8vw, 1.35rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin: 0 0 1.5rem;
  text-shadow: 0 0 1.5rem rgba(0, 232, 255, 0.5);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: 4rem 1.5rem 4rem;
  text-align: center;
  color: #fff;
`;

export const HeroHeadline = styled.h1`
  font-size: clamp(1.5rem, 4.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 1rem;
`;

export const HeroSub = styled.p`
  font-size: clamp(0.95rem, 2.3vw, 1.2rem);
  line-height: 1.7;
  margin: 0 0 2.2rem;
  opacity: 0.88;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const PrimaryBtn = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.ink};
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  img {
    height: 1.4rem;
    object-fit: contain;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`;

export const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.15s;

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;

export const CopyFeedback = styled.span`
  position: absolute;
  bottom: calc(100% + 0.4rem);
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: ${theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  white-space: nowrap;
  pointer-events: none;
`;

/* ── Trust bar ─────────────────────────────────────────────────────────── */
export const TrustBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 2rem;
  background: ${theme.colors.primary};
  padding: 1rem 1.5rem;
`;

export const TrustItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${theme.colors.ink};

  svg {
    font-size: 1rem;
  }
`;

/* ── Generic section ───────────────────────────────────────────────────── */
interface SectionProps {
  $alt?: boolean;
}
export const Section = styled.section<SectionProps>`
  padding: 3.5rem 1.5rem;
  background: ${({ $alt }) => ($alt ? theme.colors.surfaceTint : theme.colors.surface)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 4.5rem 6rem;
  }
`;

interface TitleProps {
  $light?: boolean;
}
export const SectionTitle = styled.h2<TitleProps>`
  text-align: center;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 700;
  margin: 0 0 1.5rem;
  color: ${({ $light }) => ($light ? theme.colors.whiteText : theme.colors.ink)};
`;

/* ── Donation cards ─────────────────────────────────────────────────────── */
export const DonationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DonationCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);

  svg {
    font-size: 2rem;
    color: ${theme.colors.primaryText};
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    color: #555;
  }
`;

/* ── Steps ──────────────────────────────────────────────────────────────── */
export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StepCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.6rem 0 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
    color: #444;
  }
`;

export const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${theme.colors.primary};
  color: ${theme.colors.ink};
  font-weight: 700;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

/* ── Gallery ────────────────────────────────────────────────────────────── */
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GalleryItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  /* iOS Safari < 15 fallback */
  padding-top: 75%;
  @supports (aspect-ratio: 1) {
    padding-top: 0;
    aspect-ratio: 4 / 3;
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* ── Lightbox ───────────────────────────────────────────────────────────── */
export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LightboxBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  cursor: pointer;
`;

export const LightboxImg = styled.img`
  position: relative;
  z-index: 1;
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 0.5rem;
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary};
  }
`;

interface NavProps {
  $left?: boolean;
}
export const LightboxNav = styled.button<NavProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $left }) =>
    $left
      ? css`
          left: 1rem;
        `
      : css`
          right: 1rem;
        `}
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary};
  }
`;

/* ── Video section ──────────────────────────────────────────────────────── */
export const VideoWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

/* ── Contacts section ───────────────────────────────────────────────────── */
export const ContactsSection = styled.section`
  background: ${theme.colors.ink};
  padding: 3rem 1.5rem;
  text-align: center;

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: ${theme.colors.whiteText};
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 232, 255, 0.2);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const PixBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const PixCopyBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  text-decoration: underline dotted;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
