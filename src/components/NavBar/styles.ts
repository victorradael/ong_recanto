import styled from 'styled-components';
import { pixelToViewWidth } from '../../utils/pixelToViewWidth';
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
    /* justify-content: space-between; */
    padding: 0.8rem;

    button {
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
        font-size: 0.8rem;
      }

      @media (max-width: 980px) {
        font-size: 0.7rem;
      }

      &:hover {
        color: ${theme.colors.secondaryLight};
      }
    }

    transition: 0.3s;
    @media (max-width: 660px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 0.2rem;
    }
  }
`;
