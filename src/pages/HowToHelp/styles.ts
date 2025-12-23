import styled from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  padding: 0 1rem;

  h2 {
    font-size: 1.2rem;
    text-align: center;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 5rem;
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 2rem;

  align-items: center;
  justify-content: center;
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
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      max-width: 50rem;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  font-size: 1.2rem;
  line-height: 1.6rem;

  box-sizing: border-box;

   @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
`;

export const Options = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    padding: 0;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 70%;
    padding: 0 8rem;
  }
`;

export const Pix = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  img {
    height: 2.5rem;
    width: 7rem;
    margin-bottom: 0.2rem;
    object-fit: contain;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    p {
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
      text-align: center;
      
      @media (min-width: ${theme.breakpoints.tablet}) {
         font-size: 1rem;
      }
    }

    p:first-child {
      font-weight: bold;
    }

    p:last-child {
      margin-left: 0.5rem;
    }
  }
`;

export const Button = styled.a`
  background-color: #555;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: #7ec2ff;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;

  transition: 0.5s;

  &:hover {
    background: #2b99fc;
  }

  -webkit-box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
    padding: 1.5rem 3rem;
    border-radius: 1rem;
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
