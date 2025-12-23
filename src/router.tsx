import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './globalStyles.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import LinkTree from './pages/LinkTree';
import WhyCastrate from './pages/WhyCastrate';
import HowToHelp from './pages/HowToHelp';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <NavBar>
        <div>
          <Link to="/">CONTATOS</Link>
          <Link to="/sobre">SOBRE NÓS</Link>
          <Link to="/ajudar">COMO AJUDAR</Link>
          <Link to="/castrar">CASTRAR, POR QUÊ?</Link>
        </div>
      </NavBar>
      <Routes>
        <Route path="/" element={<LinkTree />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/ajudar" element={<HowToHelp />} />
        <Route path="/castrar" element={<WhyCastrate />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
