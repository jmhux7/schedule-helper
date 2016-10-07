import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Bootstrap from 'react-bootstrap';
import './css/style.css';
import Login from './app/components/LandingPage/Login/index';
import NewUser from './app/components/LandingPage/NewUser/index';
import AdminView from './app/components/AdminView/index';
import UserView from './app/components/UserView/index';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={Login} />
    <Route path="/signup" component={NewUser} />
    <Route path="/admin/home" component={AdminView} />
    <Route path="/user/home" component={UserView} />


  </Router>,

  document.getElementById('app')
);