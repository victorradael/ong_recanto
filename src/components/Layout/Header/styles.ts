import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  min-height: auto;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 2rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 18rem;
    padding-bottom: 0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  position: relative;

  h1 {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${theme.colors.whiteText};
    text-align: center;
    margin-top: 1rem;
    line-height: 1.4;

    @media (min-width: ${theme.breakpoints.tablet}) {
      position: absolute;
      text-align: left;
      font-size: 1.5rem;
      max-width: 32rem;
      top: 2rem;
      left: 18rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 24px;
      left: 22rem;
      top: 1rem;
    }
  }
`;

export const Logo = styled.img`
  height: 12rem;
  object-fit: contain;
  margin-bottom: 0.5rem;
  z-index: 10;

  @media (min-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    height: 20rem;
    top: 1rem;
    left: -2rem;
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 30rem;
    top: 0rem;
    left: -5rem;
  }
`;

export const BannerText = styled.span`
  margin-bottom: 8rem;
`;
export const Strong = styled.span`
  font-weight: bold;
`;
