import styled, { keyframes } from 'styled-components';
import theme from '../../utils/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100%;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 3rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }
`;

/* ── Slider ──────────────────────────────────────────────────────────────── */
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const SliderWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 2.5rem;
`;

export const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 1rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 28rem;
      height: 18rem;
    }
  }
`;

/* ── Story ───────────────────────────────────────────────────────────────── */
export const StorySection = styled.section`
  max-width: 760px;
  width: 100%;
  padding: 0 1.5rem;
  margin-bottom: 3rem;

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 1.2rem;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.1rem;
    }
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 1.5rem 0 0.8rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

/* ── Supporters ──────────────────────────────────────────────────────────── */
export const SupportersSection = styled.section`
  max-width: 760px;
  width: 100%;
  padding: 0 1.5rem;
`;

export const SupporterItem = styled.div`
  margin-bottom: 2.5rem;
`;

export const VideoWrap = styled.div`
  width: 100%;
  max-width: 760px;
  margin-bottom: 0.6rem;
`;

export const SupporterLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  strong {
    font-size: 1rem;
    color: #1a1a2e;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;
