import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/index.scss';

import Dashboard from './Dashboard';

function App () {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
