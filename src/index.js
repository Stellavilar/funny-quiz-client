import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import axios from 'axios';


axios.defaults.baseURL ='http://ec2-52-87-220-31.compute-1.amazonaws.com/';

const rootReactElement = () => {
  return (
    <Router>
      <App />
    </Router>
  );

};

const target = document.getElementById('root');
render(rootReactElement(), target);

