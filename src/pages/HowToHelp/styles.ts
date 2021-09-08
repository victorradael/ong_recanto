import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  justify-content: top;
  align-items: center;
  padding: 0 1rem;

  h2 {
    @media (max-width: 1080px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    @media (max-width: 414px) {
      font-size: 1rem;
    }

    @media (max-width: 376px) {
      font-size: 1rem;
    }
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 3rem;

  align-items: center;
  justify-content: left;
  min-width: 600px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 1.6rem;
    padding: 0;
    max-width: 50rem;

    @media (max-width: 1080px) {
      font-size: 1.3rem;
      line-height: 1.3rem;
      padding: 0rem 0rem;
      max-width: 40rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1rem;
      padding: 0rem 0rem;
      max-width: 30rem;
    }

    @media (max-width: 414px) {
      font-size: 0.8rem;
      line-height: 0.9rem;
      padding: 0rem 0rem;
      max-width: 15rem;
    }

    @media (max-width: 376px) {
      font-size: 0.8rem;
      line-height: 0.9rem;
      padding: 0rem 0rem;
      max-width: 15rem;
    }
  }

  font-size: 1.5rem;
  line-height: 2rem;

  box-sizing: border-box;
`;

export const Options = styled.div`
  box-sizing: border-box;
  display: flex;

  width: 70%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0rem 8rem;

  @media (max-width: 1080px) {
    padding: 0rem 0rem;
    max-width: 40rem;
  }

  @media (max-width: 768px) {
    padding: 0rem 0rem;
    max-width: 30rem;
  }

  @media (max-width: 414px) {
    padding: 0rem 0rem;
    max-width: 15rem;
  }

  @media (max-width: 376px) {
    padding: 0rem 0rem;
    max-width: 15rem;
  }
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

      @media (max-width: 1080px) {
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      @media (max-width: 414px) {
        font-size: 0.8rem;
      }

      @media (max-width: 376px) {
        font-size: 0.8rem;
      }
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

  @media (max-width: 1080px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 414px) {
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    border-radius: 0.3rem;
  }

  @media (max-width: 376px) {
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    border-radius: 0.3rem;
  }
`;

export const PlayerCustom = styled.iframe`
  width: 40vw;
  height: 60vh;
  @media (max-width: 1080px) {
    width: 80vw;
    height: 60vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }

  @media (max-width: 414px) {
    width: 60vw;
    height: 20vh;
  }

  @media (max-width: 376px) {
    width: 60vw;
    height: 20vh;
  }
`;
