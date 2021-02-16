import styled from 'styled-components';
import background from '../../../assets/background.png';

export const Container = styled.div`
  width: 100%;

  background-image: url(${background});
  overflow: hidden;
`;

export const PaperTransparent = styled.div`
  display: flex;
  width: 100%;

  background: rgba(253, 11, 158, 0.5);
  padding: 0.8rem;
  justify-content: center;
  overflow: hidden;
  -webkit-box-shadow: inset -1px 0px 28px 5px rgba(0, 0, 0, 0.6);
  box-shadow: inset -1px 0px 28px 5px rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f1f1f1;
  width: 100%;
  /* height: 100vh; */
  min-height: 720px;
  max-width: 1080px;
  border-radius: 13rem 0.2rem;
  -webkit-box-shadow: 1px 4px 28px -5px #000000;
  box-shadow: 1px 4px 28px -5px #000000;
  justify-content: center;
  align-items: center;

  padding: 8rem 1.6rem 1.6rem 1.6rem;
`;

export const AngelPhoto = styled.img`
  width: 20rem;
  margin-top: 2rem;
  border-radius: 3rem 0.2rem;
  transition: 0.3s;

  &:hover {
    -webkit-box-shadow: 1px 4px 28px -5px #000000;
    box-shadow: 1px 4px 28px -5px #000000;
  }
`;
