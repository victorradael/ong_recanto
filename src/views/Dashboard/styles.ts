import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  position: relative;
`;

export const TopBar = styled.div`
  background: rgb(18, 183, 179);
  width: 100%;
  height: 18rem;

  h1 {
    position: absolute;

    top: 4rem;
    left: 14rem;

    color: #f1f1f1;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0rem;
  left: -5rem;
`;
