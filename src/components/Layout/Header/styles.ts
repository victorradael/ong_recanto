import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  height: 20rem;
  justify-content: center;

  /* @media (max-width: 1080px) {
    width: 100%;
    height: 60vh;
  } */

  @media (max-width: 768px) {
    width: 100%;
    height: 18rem;
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 10rem;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: 10rem;
  }
`;

export const TopBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;

  h1 {
    position: absolute;
    font-size: 2rem;
    max-width: 32rem;
    top: 1rem;
    left: 22rem;
    font-weight: 400;

    color: ${theme.colors.whiteText};

    /* @media (max-width: 1080px) {
      width: 80vw;
      height: 60vh;
    } */

    @media (max-width: 768px) {
      font-size: 1.3rem;
      max-width: 20rem;
      top: 1rem;
      left: 22rem;
    }

    @media (max-width: 414px) {
      font-size: 0.8rem;
      max-width: 15rem;
      top: 1rem;
      left: 9rem;
    }
    }

    @media (max-width: 376px) {
      font-size: 0.8rem;
      max-width: 32rem;
      top: 1rem;
      left: 0rem;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0rem;
  left: -5rem;

  /* @media (max-width: 1080px) {
    width: 80vw;
    height: 60vh;
  } */

  @media (max-width: 768px) {
    width: 50vw;
    height: 80vh;
    left: 0rem;
  }

  @media (max-width: 414px) {
    width: 50vw;
    height: 30vh;
    left: -1rem;
  }

  @media (max-width: 376px) {
    width: 50vw;
    height: 30vh;
    left: 0rem;
  }
`;

export const BannerText = styled.span`
  margin-bottom: 8rem;
`;
export const Strong = styled.span`
  font-weight: bold;
`;
