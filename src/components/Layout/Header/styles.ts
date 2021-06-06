import styled from 'styled-components';
import theme from '../../../utils/theme';

export const Container = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  width: 100%;
  height: 18rem;
  justify-content: center;
`;

export const TopBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;

  h1 {
    position: absolute;
    font-size: 24px;
    max-width: 32rem;
    top: 1rem;
    left: 22rem;
    font-weight: 400;

    color: ${theme.colors.whiteText};
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0rem;
  left: -5rem;
`;

export const BannerText = styled.span`
  margin-bottom: 8rem;
`;
export const Strong = styled.span`
  font-weight: bold;
`;
