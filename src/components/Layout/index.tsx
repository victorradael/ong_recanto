import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import ContentBody from './ContentBody';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      <ContentBody content={children} />
      <Footer />
    </>
  );
};

export default Layout;
