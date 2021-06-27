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
  display: flex;
  flex-direction: column;
`;
export const SocialMedia = styled.div`
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;

  a {
    &:nth-child(2),
    :nth-child(3) {
      margin-left: 1rem;
    }
  }
`;
export const Whatsapp = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background: ${theme.colors.whiteText};
  border-radius: 50% 50% 50% 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 39px -1px rgba(0, 0, 0, 0.75);
`;
export const Email = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p {
    margin: 0;
    margin-left: 0.4rem;
    color: ${theme.colors.whiteText};
    font-weight: 700;
  }
`;
export const Github = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 0.4rem;
  background: #000;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  p {
    margin: 0;
    margin-right: 0.4rem;
    color: ${theme.colors.whiteText};
    font-weight: 700;
  }
`;
