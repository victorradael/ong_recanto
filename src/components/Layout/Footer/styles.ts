import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.footer`
  background: ${theme.colors.primary};

  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0 0.3rem 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contacts = styled.div`
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
`;

export const Github = styled.a`
  position: absolute;

  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #000;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  p {
    margin: 0;
    margin-right: 0.4rem;
    color: ${theme.colors.whiteText};
    font-weight: 700;
    display: none;
  }

  transition: max-height 1s ease-out;

  &:hover {
    p {
      display: inline;
    }
  }
`;

export const CopyRight = styled.footer`
  color: #fff;
`;
