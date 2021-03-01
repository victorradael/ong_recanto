import styled from 'styled-components';
import { pixelToViewWidth } from '../../utils/pixelToViewWidth';
import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: ${pixelToViewWidth(32)}; */
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  padding-top: 1rem;
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  justify-content: center;
  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;

    button {
      text-decoration: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.whiteText};
      font-size: 1rem;
      font-weight: 700;
      transition: 0.2s;

      &:hover {
        color: ${theme.colors.secondaryLight};
      }
    }
  }
`;
