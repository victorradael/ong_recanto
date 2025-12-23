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
  padding: 1.5rem;
  border-radius: 0.4rem;
  text-decoration: none;
  width: 100%;
  max-width: 300px; /* Limit width on mobile */

  svg {
    color: ${theme.colors.brown};
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.whiteText};
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    p {
      color: ${theme.colors.brown};
    }
    svg {
      color: ${theme.colors.brown};
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: none;
    padding: 1rem 3rem;
    
    svg {
        width: 100%;
        height: auto;
        margin-bottom: 0;
    }
    
    p {
        margin-left: 1rem;
        text-align: left;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
     /* Restore very large size if originally intended? 
        The original had p font-size 5rem which is massive. 
        I'll keep it reasonable but scalable. */
     p {
        font-size: 2.5rem;
     }
     svg {
        height: 5rem;
     }
  }
`;
