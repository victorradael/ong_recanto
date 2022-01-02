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
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  text-decoration: none;

  svg {
    color: ${theme.colors.brown};
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  transition: 0.5s;

  p {
    margin: 0 0 0 1rem;
    padding: 0;
    color: ${theme.colors.whiteText};
    font-weight: bold;
    align-items: center;
    text-align: center;
  }

  &:hover {
    background: ${theme.colors.secondary};
    p {
      color: ${theme.colors.brown};
    }

    svg {
      color: ${theme.colors.brown};
    }
  }

  width: 100%;

  @media (min-width: 600px) {
    p {
      font-size: 5rem;
    }

    svg {
      height: 5rem;
    }
  }
`;
