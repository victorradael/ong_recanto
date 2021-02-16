import React from 'react';

import Header from './Header';
import ContentBody from './ContentBody';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <ContentBody content={children} />
      <Footer />
    </>
  );
};

export default Layout;
