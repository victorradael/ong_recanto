import React from 'react';
import './globalStyles.css';

import NavBar from './views/NavBar';
import Header from './views/Header';
import Body from './views/Body';
import Footer from './views/Footer';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
