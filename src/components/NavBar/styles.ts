import styled from 'styled-components';

import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  padding-top: 1rem;
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  justify-content: center;

  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    padding: 0.8rem;

    a {
      text-decoration: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.whiteText};
      text-align: center;
      font-weight: 700;
      transition: 0.2s;
      margin-right: 2rem;

      &:nth-last-child(1) {
        margin: 0;
      }

      @media (max-width: 1080px) {
        font-size: 1rem;
        margin-right: 1.5rem;
        height: 2rem;
      }

      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-right: 0.8rem;
        height: 2rem;
      }

      @media (max-width: 414px) {
        font-size: 0.7rem;
        margin-right: 0.6rem;
        height: 2rem;
      }

      @media (max-width: 376px) {
        font-size: 0.7rem;
        margin-right: 0.6rem;
        height: 2rem;
      }

      &:hover {
        color: ${theme.colors.secondaryLight};
      }
    }
  }
`;
