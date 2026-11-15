import styled from 'styled-components';
import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background: ${theme.colors.primary};
  width: 100%;
  padding: 0 1.25rem;
  min-height: 3.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;

  > a {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }
`;

export const NavLogo = styled.img`
  height: 2rem;
  width: auto;
  object-fit: contain;
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 2.4rem;
  }
`;

export const HamburgerBtn = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5rem;
  height: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  /* hit target */
  min-width: 2.5rem;
  min-height: 2.5rem;
  align-items: center;

  span {
    display: block;
    width: 1.5rem;
    height: 2px;
    background: ${theme.colors.ink};
    border-radius: 2px;
    transition: transform 0.22s ease, opacity 0.22s ease;
    transform-origin: center;
  }

  ${({ $open }) =>
    $open &&
    `
    span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
  `}

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavMenu = styled.div<{ $open: boolean }>`
  /* Mobile: hidden by default, dropdown when open */
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  background: ${theme.colors.primary};
  padding: 0.25rem 0 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  z-index: 99;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    position: static;
    padding: 0;
    box-shadow: none;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  /* Inner div from router.tsx */
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: auto;
      gap: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.ink};
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0.85rem 1.5rem;
    text-align: center;
    transition: background 0.15s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 0;
      margin-right: 2rem;
      text-align: left;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: none;
        opacity: 0.72;
      }
    }
  }
`;
