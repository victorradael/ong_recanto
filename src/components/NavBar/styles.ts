import styled from 'styled-components';
import theme from '../../utils/theme';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background: ${theme.colors.ink};
  border-bottom: 3px solid ${theme.colors.primary};
  width: 100%;
  padding: 0 1.5rem;
  min-height: 4rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);

  > a {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    text-decoration: none;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 2.5rem;
  }
`;

export const NavLogo = styled.img`
  height: 2.2rem;
  width: auto;
  object-fit: contain;
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 2.6rem;
  }
`;

export const HamburgerBtn = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  border-radius: 6px;
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  /* Inner wrapper carries the visual 3-line icon */
  > span:first-of-type {
    all: unset;
    display: block;
    position: relative;
    width: 1.6rem;
    height: 1.4rem;
  }

  /* The three lines */
  > span > span {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${theme.colors.whiteText};
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.2s ease;
    transform-origin: center;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }

  ${({ $open }) =>
    $open &&
    `
    > span > span:nth-child(1) { transform: translateY(11px) rotate(45deg); }
    > span > span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    > span > span:nth-child(3) { transform: translateY(-11px) rotate(-45deg); }
  `}

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavMenu = styled.div<{ $open: boolean }>`
  /* Mobile: animated height dropdown */
  position: absolute;
  top: calc(4rem + 3px);
  left: 0;
  right: 0;
  background: ${theme.colors.ink};
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '480px' : '0')};
  transition: max-height 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $open }) =>
    $open ? '0 8px 24px rgba(0, 0, 0, 0.45)' : 'none'};
  z-index: 99;
  border-bottom: ${({ $open }) =>
    $open ? `2px solid ${theme.colors.primary}` : 'none'};

  @media (min-width: ${theme.breakpoints.tablet}) {
    position: static;
    overflow: visible;
    max-height: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    box-shadow: none;
    padding: 0;
    transition: none;
    border-bottom: none;
  }

  /* Inner links container from router.tsx */
  > div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0 1.25rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: auto;
      padding: 0;
      gap: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.whiteText};
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    padding: 0.9rem 1.75rem;
    text-align: center;
    transition: color 0.18s, background 0.18s;

    &:hover {
      color: ${theme.colors.primary};
      background: rgba(255, 255, 255, 0.05);
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 0;
      margin-left: 2rem;
      text-align: left;

      &:hover {
        background: none;
        color: ${theme.colors.primary};
      }
    }
  }
`;
