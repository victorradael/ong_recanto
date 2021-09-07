import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  height: 18rem;
  justify-content: center;

  @media (max-width: 1080px) {
    height: 18rem;
  }

  @media (max-width: 768px) {
    height: 14rem;
  }

  @media (max-width: 414px) {
    height: 11rem;
  }

  @media (max-width: 376px) {
    height: 12rem;
  }
`;

export const TopBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;

  h1 {
    position: absolute;
    font-size: 24px;
    max-width: 32rem;
    top: 1rem;
    left: 22rem;
    font-weight: 400;

    color: ${theme.colors.whiteText};

    @media (max-width: 1080px) {
      font-size: 1.6rem;
      left: 22rem;
      top: 0.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      left: 14.5rem;
      top: 1rem;
      padding: 0.5rem;
    }

    @media (max-width: 414px) {
      font-size: 1rem;
      left: 8.5rem;
      top: 0.2rem;
    }

    @media (max-width: 376px) {
      font-size: 1rem;
      left: 8.5rem;
      top: 0.2rem;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0rem;
  left: -5rem;
  /* width: 3rem; */
  height: 30rem;

  @media (max-width: 1080px) {
    height: 24rem;
    left: -1rem;
    top: 2rem;
  }

  @media (max-width: 768px) {
    height: 20rem;
    left: -2rem;
    top: 1rem;
  }

  @media (max-width: 414px) {
    height: 11rem;
    left: -1rem;
    top: 2rem;
  }

  @media (max-width: 376px) {
    height: 11rem;
    left: -1rem;
    top: 2rem;
  }
`;

export const BannerText = styled.span`
  margin-bottom: 8rem;
`;
export const Strong = styled.span`
  font-weight: bold;
`;
