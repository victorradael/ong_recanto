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
    box-sizing: border-box;
  }

  font-size: 1.5rem;
  line-height: 2rem;

  @media (max-width: 1080px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0rem 3rem;
  }

  @media (max-width: 414px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding: 0rem 0rem;
  }

  @media (max-width: 376px) {
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0rem 0rem;
  }

  box-sizing: border-box;
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

export const PlayerCustom = styled.iframe`
  width: 40vw;
  height: 60vh;
  @media (max-width: 1080px) {
    width: 80vw;
    height: 60vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }

  @media (max-width: 414px) {
    width: 60vw;
    height: 20vh;
  }

  @media (max-width: 376px) {
    width: 60vw;
    height: 20vh;
  }
`;
