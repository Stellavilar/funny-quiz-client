import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/index.scss';

import Page404 from './Page404';
import Dashboard from './Dashboard';
import SubCatQuiz from './SubCatQuiz';
import SpecificQuiz from './SpecificQuiz';
import CreateAccount from './CreateAccount';
import Footer from './Footer';



function App () {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/'>
            <Dashboard />
            <Footer />
        </Route>
        <Route exact path='/specificQuiz/:tagId/level/:levelId'> 
            <SpecificQuiz />
        </Route>
        <Route exact path='/classifiedQuiz/:id'> 
            <SubCatQuiz />
        </Route>
        <Route exact path='/createAccount'> 
            <CreateAccount />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
