import React, { MouseEvent, useState } from 'react';
import './globalStyles.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import Accountability from './pages/Accountability';
import AdoptionOfCats from './pages/AdoptionOfCats';
import AdoptionOfDogs from './pages/AdoptionOfDogs';
import Adopted from './pages/Adopted';
import HowToHelp from './pages/HowToHelp';

const Router: React.FC = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showAccountability, setShowAccountability] = useState(false);
  const [showAdoptionOfCats, setShowAdoptionOfCats] = useState(false);
  const [showAdoptionOfDogs, setShowAdoptionOfDogs] = useState(false);
  const [showAdopted, setShowAdopted] = useState(false);
  const [showHowToHelp, setShowHowToHelp] = useState(false);

  const visibleAbout = (): void => {
    setShowAbout(true);
    setShowAccountability(false);
    setShowAdoptionOfCats(false);
    setShowAdoptionOfDogs(false);
    setShowAdopted(false);
    setShowHowToHelp(false);
  };

  const visibleAccountability = (): void => {
    setShowAbout(false);
    setShowAccountability(true);
    setShowAdoptionOfCats(false);
    setShowAdoptionOfDogs(false);
    setShowAdopted(false);
    setShowHowToHelp(false);
  };

  const visibleAdoptionOfCats = (): void => {
    setShowAbout(false);
    setShowAccountability(false);
    setShowAdoptionOfCats(true);
    setShowAdoptionOfDogs(false);
    setShowAdopted(false);
    setShowHowToHelp(false);
  };

  const visibleAdoptionOfDogs = (): void => {
    setShowAbout(false);
    setShowAccountability(false);
    setShowAdoptionOfCats(false);
    setShowAdoptionOfDogs(true);
    setShowAdopted(false);
    setShowHowToHelp(false);
  };

  const visibleAdopted = (): void => {
    setShowAbout(false);
    setShowAccountability(false);
    setShowAdoptionOfCats(false);
    setShowAdoptionOfDogs(false);
    setShowAdopted(true);
    setShowHowToHelp(false);
  };

  const visibleHowToHelp = (): void => {
    setShowAbout(false);
    setShowAccountability(false);
    setShowAdoptionOfCats(false);
    setShowAdoptionOfDogs(false);
    setShowAdopted(false);
    setShowHowToHelp(true);
  };

  return (
    <>
      <NavBar>
        <div>
          <button type="button" onClick={() => visibleAbout()}>
            SOBRE NÓS
          </button>
          <button type="button" onClick={() => visibleAdoptionOfDogs()}>
            ADOÇÕES CÃES
          </button>
          <button type="button" onClick={() => visibleAdoptionOfCats()}>
            ADOÇÕES GATOS
          </button>
          <button type="button" onClick={() => visibleAdopted()}>
            ADOTADOS
          </button>
          <button type="button" onClick={() => visibleAccountability()}>
            PRESTAÇÃO DE CONTAS
          </button>
          <button type="button" onClick={() => visibleHowToHelp()}>
            COMO AJUDAR
          </button>
        </div>
      </NavBar>
      {showAbout && <About />}
      {showAccountability && <Accountability />}
      {showAdoptionOfCats && <AdoptionOfCats />}
      {showAdoptionOfDogs && <AdoptionOfDogs />}
      {showAdopted && <Adopted />}
      {showHowToHelp && <HowToHelp />}
    </>
  );
};

export default Router;
