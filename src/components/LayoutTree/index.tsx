import React from 'react';

import Header from './Header';
import ContentBody from './ContentBody';
import Footer from '../Layout/Footer';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <ContentBody content={children} />
      <Footer />
    </>
  );
};

export default Layout;
