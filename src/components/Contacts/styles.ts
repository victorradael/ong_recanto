import styled from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 1rem;
  bottom: 1rem;
  flex-direction: column;
`;

export const Whatsapp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.whiteText};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 0.2rem;
  border-radius: 50% 50% 50% 0.4rem;

  svg {
    color: ${theme.colors.secondary};
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    svg {
      color: ${theme.colors.whiteText};
    }
  }
`;

export const Instagram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.whiteText};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 0.2rem;
  border-radius: 0.4rem;

  svg {
    color: ${theme.colors.secondary};
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    svg {
      color: ${theme.colors.whiteText};
    }
  }
`;

export const Facebook = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.whiteText};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 0.2rem;
  border-radius: 0.4rem;

  svg {
    color: ${theme.colors.secondary};
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    svg {
      color: ${theme.colors.whiteText};
    }
  }
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.whiteText};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  padding: 0.2rem;
  border-radius: 0.4rem;

  svg {
    color: ${theme.colors.secondary};
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    svg {
      color: ${theme.colors.whiteText};
    }
  }
`;

export const Twitter = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.whiteText};
  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  padding: 0.2rem;
  border-radius: 0.4rem 30% 70% 0.4rem;

  svg {
    color: ${theme.colors.secondary};
  }

  transition: 0.5s;

  &:hover {
    background: ${theme.colors.secondary};
    svg {
      color: ${theme.colors.whiteText};
    }
  }
`;
