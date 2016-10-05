import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import './css/style.css';
import Login from './app/components/LandingPage/Login/index';
import NewUser from './app/components/LandingPage/NewUser/index';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={Login} />
    <Route path="/signup" component={NewUser} />


  </Router>,
document.getElementById('app')
);