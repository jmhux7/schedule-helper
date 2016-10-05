import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import LandingPage from './app/components/LandingPage/index';
import './css/style.css';



ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={LandingPage} />

  </Router>,
document.getElementById('app')
);