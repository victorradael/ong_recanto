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
  color: #1a1a2e;
  margin-bottom: 1.5rem;
`;

export const TransparencyBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #e8f8fa;
  border-left: 4px solid ${theme.colors.primary};
  border-radius: 0.5rem;
  padding: 1.2rem 1.4rem;
  margin-bottom: 2.5rem;

  svg {
    font-size: 1.6rem;
    color: ${theme.colors.primary};
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #333;
  }
`;

export const HelpSection = styled.section`
  margin-bottom: 2.5rem;

  > p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 0.8rem;
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1rem;

  img {
    height: 1.4rem;
    object-fit: contain;
  }

  svg {
    font-size: 1.1rem;
    color: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

export const PixCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding: 1.4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  > p {
    margin: 0 0 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #555;
  }
`;

export const PixKey = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;

  span {
    font-weight: 600;
    font-size: 0.95rem;
    color: #222;
  }
`;

export const PixLogo = styled.img`
  height: 1.8rem;
  object-fit: contain;
`;

export const CopyBtn = styled.button`
  position: relative;
  background: ${theme.colors.primary};
  color: #000;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #00c8db;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid #00e8ff;
    outline-offset: 3px;
  }
`;

export const CopyFeedback = styled.span`
  position: absolute;
  bottom: calc(100% + 0.3rem);
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #00e8ff;
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 0.3rem;
  white-space: nowrap;
  pointer-events: none;
`;

export const BankCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const BankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }

  strong {
    font-size: 0.95rem;
    color: #222;
  }
`;

export const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;

    &::before {
      content: '→';
      color: ${theme.colors.primary};
      font-weight: 700;
      flex-shrink: 0;
    }
  }
`;

export const VolunteerCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding: 1.4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  p {
    margin: 0 0 1.2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
  }
`;

export const VolunteerLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25d366;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #1db954;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid #25d366;
    outline-offset: 3px;
  }
`;
