import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
