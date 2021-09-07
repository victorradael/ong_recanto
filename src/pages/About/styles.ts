import styled from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  margin-top: 13rem;
  padding: 0rem 4rem;
`;

export const PresentationText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem 9rem;
  margin: 0 auto;

  align-items: center;
  min-width: 600px;

  p {
    margin: 0;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 360px) {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media (min-width: 720px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (min-width: 1080px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Supporters = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Slider = styled.div`
  display: flex;
  margin: 3rem;
  box-sizing: border-box;

  border-radius: 1rem;
  margin: 0;
  margin-bottom: 2rem;

  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  img {
    width: 30rem;
    height: 20rem;
  }

  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.secondary} ${theme.colors.whiteText};

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.whiteText};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary};
    border-radius: 20px;
    border: 3px solid ${theme.colors.whiteText};
  }
`;
