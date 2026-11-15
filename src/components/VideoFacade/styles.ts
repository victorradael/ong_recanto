import styled from 'styled-components';
import theme from '../../utils/theme';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* iOS Safari < 15 fallback: padding-top gives 16:9 height from width */
  padding-top: 56.25%;
  @supports (aspect-ratio: 1) {
    padding-top: 0;
    aspect-ratio: 16 / 9;
  }
  background: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  max-width: 800px;

  &:focus-visible {
    outline: 3px solid ${theme.colors.primaryText};
    outline-offset: 2px;
  }

  &:hover svg path:first-child {
    fill: #cc0000;
  }
`;

export const Thumbnail = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const PlayButton = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);

  svg {
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
    transition: transform 0.15s ease;
  }

  ${Wrapper}:hover & svg {
    transform: scale(1.1);
  }
`;

export const Frame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;
