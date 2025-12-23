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
  margin-top: 2rem;
  padding: 0 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 2rem;
    margin-top: 4rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 4rem;
    margin-top: 13rem;
  }
`;

export const PresentationText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;

  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 1080px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 1.6rem;
    padding: 0;
    width: 100%;
    max-width: 100%;

    font-size: 1rem;
    line-height: 1.4rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 1.5rem;
      line-height: 2rem;
      max-width: 50rem;
    }
  }

  font-size: 1.5rem;
  line-height: 2rem;

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
    width: 15rem; /* Smaller for mobile */
    height: 10rem;
    object-fit: cover;
    margin-right: 10px;

     @media (min-width: ${theme.breakpoints.tablet}) {
        width: 30rem;
        height: 20rem; 
     }
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
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  min-height: 240px; 
  border: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 768px;
    height: 432px; /* 16:9 of 768px */
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 900px;
    height: 506px; /* 16:9 of 900px */
  }
`;
