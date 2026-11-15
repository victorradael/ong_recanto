import styled from 'styled-components';

import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background: ${theme.colors.primary};
  width: 100%;
  justify-content: center;
  padding: 0.6rem 1.5rem;
  gap: 1.5rem;

  > a {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0;
    gap: 0.8rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      justify-content: flex-end;
      gap: 0;
    }

    a {
      text-decoration: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.ink};
      text-align: center;
      font-weight: 700;
      transition: 0.2s;
      font-size: 0.95rem;

      @media (min-width: ${theme.breakpoints.tablet}) {
        margin-right: 2rem;

        &:last-child {
          margin-right: 0;
        }
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const NavLogo = styled.img`
  height: 2rem;
  width: auto;
  object-fit: contain;
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 2.2rem;
  }
`;
