import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/index.scss';

import Page404 from './Page404';
import Dashboard from './Dashboard';
import SubCatQuiz from './SubCatQuiz';


function App () {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path='/classifiedQuiz/:id'> 
            <SubCatQuiz />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
