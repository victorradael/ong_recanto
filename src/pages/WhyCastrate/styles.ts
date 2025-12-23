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
    margin-top: 4rem;
    padding: 0 4rem;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 6rem;
  }
`;

export const PresentationText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1080px;

  @media (min-width: ${theme.breakpoints.tablet}) {
     padding: 3rem;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
     padding: 6rem;
  }

  h2,
  h1 {
    line-height: 2.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    display: flex;
    margin: 0;
    text-indent: 1rem;
    text-align: justify;
    margin-bottom: 0.8rem;
    padding: 0;
    width: 100%;
    max-width: 100%;
    font-size: 1rem;
    line-height: 1.6rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      text-indent: 3rem;
    }
  
    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 1.5rem;
      line-height: 2rem;
      max-width: 50rem;
    }
  }

  font-size: 1.2rem;
  line-height: 1.5rem;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Supporters = styled.section`
  display: flex;
  flex-direction: column;
`;
