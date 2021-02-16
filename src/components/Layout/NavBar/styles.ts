import styled from 'styled-components';

export const NavContainer = styled.nav`
  padding-top: 1rem;
  display: flex;

  background: #7ec2ff;

  width: 100%;

  justify-content: center;

  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;

    a {
      text-decoration: none;
      color: #f1f1f1;
      font-weight: 700;
      transition: 0.2s;

      &:hover {
        color: #ffd0ec;
      }
    }
  }
`;
