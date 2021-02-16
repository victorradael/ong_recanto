import React, { ReactNode } from 'react';

import { Container, PaperTransparent, Content } from './styles';

interface IContent {
  content: ReactNode;
}

const ContentBody: React.FC<IContent> = ({ content }) => {
  return (
    <Container>
      <PaperTransparent>
        <Content>{content}</Content>
      </PaperTransparent>
    </Container>
  );
};

export default ContentBody;
