import styled from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
  text-decoration: none;
  width: 90%;
  max-width: 320px;

  svg {
    color: ${theme.colors.brown};
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.whiteText};
    font-weight: bold;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.2;
  }

  transition: 0.2s ease-in-out;

  &:hover {
    background: ${theme.colors.secondary};
    transform: scale(1.02);
    p {
      color: ${theme.colors.brown};
    }
    svg {
      color: ${theme.colors.brown};
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 4rem 1fr;
    max-width: 500px;
    padding: 1.5rem 2rem;
    gap: 1.5rem;
    align-items: center; /* Center vertically */
    
    svg {
        width: 3.5rem; /* Fixed width */
        height: 3.5rem;
        margin-bottom: 0;
        justify-self: center;
    }
    
    p {
        margin-left: 0;
        text-align: left;
        font-size: 1.5rem;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
     max-width: 600px;
     
     svg {
        width: 4rem;
        height: 4rem;
     }

     p {
        font-size: 1.8rem;
     }
  }
`;
