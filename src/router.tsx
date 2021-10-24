import React, { useState } from 'react';
import './globalStyles.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import LinkTree from './pages/LinkTree';
import WhyCastrate from './pages/WhyCastrate';
import HowToHelp from './pages/HowToHelp';

const Router: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWhyCastrate, setShowWhyCastrate] = useState(false);
  const [showLinkTree, setShowLinkTree] = useState(true);
  const [showHowToHelp, setShowHowToHelp] = useState(false);

  const visibleAbout = (): void => {
    setShowAbout(true);
    setShowWhyCastrate(false);
    setShowLinkTree(false);
    setShowHowToHelp(false);
  };

  const whyCastrate = (): void => {
    setShowAbout(false);
    setShowWhyCastrate(true);
    setShowLinkTree(false);
    setShowHowToHelp(false);
  };

  const visibleLinkTree = (): void => {
    setShowAbout(false);
    setShowWhyCastrate(false);
    setShowLinkTree(true);
    setShowHowToHelp(false);
  };

  const visibleHowToHelp = (): void => {
    setShowAbout(false);
    setShowWhyCastrate(false);
    setShowLinkTree(false);
    setShowHowToHelp(true);
  };

  return (
    <>
      <NavBar>
        <div>
          <button type="button" onClick={() => visibleLinkTree()}>
            CONTATOS
          </button>
          <button type="button" onClick={() => visibleAbout()}>
            SOBRE NÓS
          </button>
          <button type="button" onClick={() => visibleHowToHelp()}>
            COMO AJUDAR
          </button>
          <button type="button" onClick={() => whyCastrate()}>
            POR QUÊ CASTRAR?
          </button>
        </div>
      </NavBar>
      {showLinkTree && <LinkTree />}
      {showAbout && <About />}
      {showWhyCastrate && <WhyCastrate />}
      {showHowToHelp && <HowToHelp />}
    </>
  );
};

export default Router;
