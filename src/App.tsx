import React from 'react';
import './globalStyles.css';

import NavBar from './views/NavBar';
import Header from './views/Header';
import About from './views/About';
import Adopted from './views/Adopted';
import Footer from './views/Footer';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      {/* <About /> */}
      <Adopted />
      <Footer />
    </>
  );
};

export default App;
