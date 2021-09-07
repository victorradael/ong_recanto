import styled from 'styled-components';
import background from '../../../assets/background.png';
import theme from '../../../utils/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  overflow: hidden;
`;

export const PaperTransparent = styled.div`
  display: flex;
  width: 100%;
  background: ${theme.colors.secondaryBackgroundGlass};
  padding: 0rem 3rem;
  justify-content: center;
  overflow: hidden;
  -webkit-box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
  box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
`;
