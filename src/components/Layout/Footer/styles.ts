import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.footer`
  background: ${theme.colors.primary};
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
     padding: 4rem 0 0.3rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Github = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.ink};

  p {
    margin: 0;
    margin-right: 0.4rem;
    font-weight: 700;
    max-width: 0rem;
    max-height: 0rem;
    overflow: hidden;
    transition: max-width 1s ease-in-out;
    font-size: 0.8rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 1rem;
    }
  }

  transition: color 1s;

  svg {
    border-radius: 50%;
  }

  &:hover {
    p {
      max-width: 20rem;
      max-height: 1rem;
      pointer-events: none;
    }

    background-image: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.primary});
    background-image: -webkit-linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.primary});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    svg {
      background-image: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.primary});
      background-image: -webkit-linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.primary});
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
     /* Original design had absolute positioning, but flex column is safer */
  }
`;

export const CopyRight = styled.footer`
  color: ${theme.colors.ink};
  font-weight: bold;
  transition: 0.5s;
  font-size: 0.7rem;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.85rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 1rem;
  }

  &:hover {
    background-image: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent});
    background-image: -webkit-linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
