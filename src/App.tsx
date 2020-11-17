import React from 'react';
import './globalStyles.css';

import Dashboard from './views/Dashboard';
import NavBar from './views/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  );
};

export default App;
