import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './globalStyles.css';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Links from './pages/Links';
import WhyCastrate from './pages/WhyCastrate';
import HowToHelp from './pages/HowToHelp';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <NavBar>
        <div>
          <Link to="/">INÍCIO</Link>
          <Link to="/sobre">SOBRE NÓS</Link>
          <Link to="/ajudar">COMO AJUDAR</Link>
          <Link to="/castrar">CASTRAR, POR QUÊ?</Link>
          <Link to="/links">CONTATOS</Link>
        </div>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/ajudar" element={<HowToHelp />} />
        <Route path="/castrar" element={<WhyCastrate />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
