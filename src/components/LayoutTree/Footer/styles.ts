import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.footer`
  background: ${theme.colors.primary};

  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 0 0.3rem 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Github = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
  color: ${theme.colors.whiteText};
  p {
    margin: 0;
    margin-right: 0.4rem;
    font-weight: 700;
    max-width: 0rem;
    max-height: 0rem;
    overflow: hidden;
    transition: max-width 1s ease-in-out;

    @media (max-width: 1080px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 414px) {
      font-size: 0.7rem;
    }

    @media (max-width: 376px) {
      font-size: 0.7rem;
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

    background-image: linear-gradient(to right, #fc466b, #3f5efb);
    background-image: -webkit-linear-gradient(to right, #fc466b, #3f5efb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    svg {
      background-image: linear-gradient(to right, #fc466b, #3f5efb);
      background-image: -webkit-linear-gradient(to right, #fc466b, #3f5efb);
    }
  }
`;

export const CopyRight = styled.footer`
  color: #fff;
  font-weight: bold;

  transition: 0.5s;

  @media (max-width: 1080px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 414px) {
    font-size: 0.7rem;
  }

  @media (max-width: 376px) {
    font-size: 0.7rem;
  }

  &:hover {
    background-image: linear-gradient(to right, #3f5efb, #fc466b);
    background-image: -webkit-linear-gradient(to right, #3f5efb, #fc466b);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
