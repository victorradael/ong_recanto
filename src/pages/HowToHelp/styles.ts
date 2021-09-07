import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  padding: 2rem 0;
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem 9rem;
  margin: 0 auto;
  align-items: center;

  p {
    margin: 0;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 360px) {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media (min-width: 720px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (min-width: 1080px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Options = styled.div`
  box-sizing: border-box;
  display: flex;

  width: 70%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0rem 8rem;
`;

export const Pix = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  img {
    height: 2.5rem;
    width: 7rem;
    margin-bottom: 0.2rem;
  }
  div {
    display: flex;
    flex-direction: row;

    p {
      margin: 0;
      padding: 0;
    }

    p:first-child {
      font-weight: bold;
    }

    p:last-child {
      margin-left: 0.5rem;
    }
  }
`;

export const Button = styled.a`
  background-color: #555;
  text-decoration: none;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  background: #7ec2ff;
  color: #fff;
  font-weight: bold;

  transition: 0.5s;

  &:hover {
    background: #2b99fc;
  }

  -webkit-box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.75);
`;
