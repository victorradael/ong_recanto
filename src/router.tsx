import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './globalStyles.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import LinkTree from './pages/LinkTree';
import WhyCastrate from './pages/WhyCastrate';
import HowToHelp from './pages/HowToHelp';

const Routes: React.FC = () => {
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
      <Switch>
        <Route exact path="/">
          <LinkTree />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/ajudar">
          <HowToHelp />
        </Route>
        <Route path="/castrar">
          <WhyCastrate />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
