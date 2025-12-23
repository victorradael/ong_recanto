import styled, { keyframes } from 'styled-components';
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

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 3rem 0;
  margin-bottom: 2rem;
  background-color: transparent;
`;

export const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 50s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }

  img {
    width: 15rem; /* Smaller for mobile */
    height: 10rem;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 1rem;

     @media (min-width: ${theme.breakpoints.tablet}) {
        width: 30rem;
        height: 20rem; 
     }
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
