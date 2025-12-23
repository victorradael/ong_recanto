import styled from 'styled-components';

import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  justify-content: center;
  padding: 1rem 0;

  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 0.8rem;
    gap: 1rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      justify-content: center; /* Or space-between/flex-start depending on desired look */
      gap: 0;
    }

    a {
      text-decoration: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.whiteText};
      text-align: center;
      font-weight: 700;
      transition: 0.2s;
      font-size: 1rem; /* Base size for mobile */

      @media (min-width: ${theme.breakpoints.tablet}) {
        margin-right: 2rem;
        
        &:last-child {
          margin-right: 0;
        }
      }

      &:hover {
        color: ${theme.colors.secondaryLight};
      }
    }
  }
`;
