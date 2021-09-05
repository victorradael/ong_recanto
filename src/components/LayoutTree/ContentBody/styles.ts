import styled from 'styled-components';
import background from '../../../assets/background.png';
import theme from '../../../utils/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-image: url(${background});
  overflow: hidden;
`;

export const PaperTransparent = styled.div`
  display: flex;
  width: 100%;
  background: ${theme.colors.secondaryBackgroundGlass};
  padding: 3rem;
  justify-content: center;
  overflow: hidden;
  -webkit-box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
  box-shadow: inset 2px -1px 90px -9px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  display: flex;
  /* background: ${theme.colors.whiteText}; */
  width: 100%;
  min-height: 100vh;
  max-width: 1080px;
  border-radius: 1rem;
  /* -webkit-box-shadow: 1px 4px 28px -5px #000000;
  box-shadow: 1px 4px 28px -5px #000000; */
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;
