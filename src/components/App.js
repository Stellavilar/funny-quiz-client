import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/index.scss';

import Dashboard from './Dashboard';

function App () {
  return (
    <div className="container">
        <Route exact path='/'>
          <Dashboard />
        </Route>
    </div>
  );
}

export default App;
