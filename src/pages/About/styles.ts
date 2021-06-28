import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  margin-top: 13rem;
  padding: 0rem 4rem;
`;

export const PresentationText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem 10rem;
  margin: 0 auto;

  align-items: center;
  font-size: 18px;
  line-height: 28px;
  min-width: 600px;

  p {
    margin: 0;
    margin-bottom: 1.6rem;
  }
`;

export const Supporters = styled.section`
  display: flex;
  flex-direction: column;
`;
