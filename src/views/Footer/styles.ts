import styled from 'styled-components';

export const Container = styled.footer`
  background: #7ec2ff;
  height: 8rem;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
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
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
`;
export const Whatsapp = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p {
    margin: 0;
    margin-left: 0.4rem;
    color: #f1f1f1;
    font-weight: 700;
  }
`;
export const Github = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 0.4rem;
  p {
    margin: 0;

    color: #f1f1f1;
    font-weight: 700;
  }
`;
