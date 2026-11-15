import styled from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 760px;
  margin: 2rem auto 4rem;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 4rem;
    padding: 0 2rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 700;
  color: ${theme.colors.ink};
  margin-bottom: 0.8rem;
`;

export const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 2rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

/* ── TOC ─────────────────────────────────────────────────────────────────── */
export const TocList = styled.ol`
  background: ${theme.colors.surfaceTint};
  border-radius: 0.5rem;
  padding: 1rem 1rem 1rem 2.2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.ink};
`;

export const TocItem = styled.li`
  margin-bottom: 0.4rem;
  font-size: 0.9rem;

  a {
    color: ${theme.colors.primaryText};
    text-decoration: underline dotted;

    &:hover {
      color: ${theme.colors.primaryText};
    }
  }
`;

/* ── Accordion ───────────────────────────────────────────────────────────── */
export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const AccordionItem = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  scroll-margin-top: 5rem;
`;

interface BtnProps {
  $open: boolean;
}
export const AccordionButton = styled.button<BtnProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: ${({ $open }) => ($open ? theme.colors.surfaceTint : theme.colors.surface)};
  border: none;
  padding: 1rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.ink};
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;

  svg {
    flex-shrink: 0;
    font-size: 0.85rem;
    color: ${theme.colors.primaryText};
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.2s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &:hover {
    background: ${theme.colors.surfaceTint};
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primaryText};
    outline-offset: -3px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const AccordionPanel = styled.div`
  padding: 1rem 1.2rem 1.2rem;
  background: ${theme.colors.surface};

  &[hidden] {
    display: none;
  }

  p {
    margin: 0 0 0.8rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #444;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

/* ── Disclaimer ──────────────────────────────────────────────────────────── */
export const Disclaimer = styled.p`
  font-size: 0.85rem;
  color: #777;
  line-height: 1.5;
  border-top: 1px solid ${theme.colors.border};
  padding-top: 1rem;
  margin-bottom: 2.5rem;
`;

/* ── CTA ─────────────────────────────────────────────────────────────────── */
export const CtaSection = styled.section`
  background: ${theme.colors.ink};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  color: ${theme.colors.whiteText};

  p {
    margin: 0.5rem 0 1.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.85;
  }
`;

export const CtaTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
`;

export const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
`;

export const PixBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.ink};
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  img {
    height: 1.2rem;
    object-fit: contain;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.whiteText};
    outline-offset: 3px;
  }
`;

export const WhatsappBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.whatsapp};
  color: ${theme.colors.whiteText};
  text-decoration: none;
  border-radius: 2rem;
  padding: 0.8rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  transition: background 0.2s, transform 0.15s;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    background: ${theme.colors.whatsappHover};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.whatsapp};
    outline-offset: 3px;
  }
`;
