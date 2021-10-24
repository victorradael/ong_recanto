import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  margin-top: 6rem;
  padding: 0rem 4rem;

  @media (max-width: 1080px) {
    padding: 0rem 1rem;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    margin-top: 3rem;
  }

  @media (max-width: 414px) {
    padding: 0rem 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 376px) {
    padding: 0rem 1rem;
    margin-top: 2rem;
  }
`;

export const PresentationText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6rem;

  align-items: left;
  justify-content: center;
  min-width: 600px;

  h2,
  h1 {
    line-height: 2.5rem;
  }

  p {
    display: flex;
    margin: 0;
    text-indent: 3rem;
    text-align: justify;
    margin-bottom: 0.8rem;
    padding: 0;
    max-width: 50rem;

    @media (max-width: 1080px) {
      font-size: 1.3rem;
      line-height: 2rem;
      padding: 0rem 0rem;
      max-width: 40rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7rem;
      padding: 0rem 0rem;
      max-width: 30rem;
    }

    @media (max-width: 414px) {
      font-size: 0.8rem;
      line-height: 1.6rem;
      padding: 0rem 0rem;
      max-width: 15rem;
    }

    @media (max-width: 376px) {
      font-size: 0.8rem;
      line-height: 1.6rem;
      padding: 0rem 0rem;
      max-width: 15rem;
    }
  }

  font-size: 1.5rem;
  line-height: 2rem;

  box-sizing: border-box;
`;

export const Supporters = styled.section`
  display: flex;
  flex-direction: column;
`;
