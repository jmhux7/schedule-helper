import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Home from './app/app';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={Home} />

  </Router>,
document.getElementById('app')
);