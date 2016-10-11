import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-materialize';
import $ from 'jquery';

import NavBar from './../GlobalComponents/NavBar';
import CreateEventSchedule from './AdminComponents/CreateEventSchedule';

export default class EventSchedule extends Component {

  render () {
    return(
        <div>
            <CreateEventSchedule />
        </div>
    )
  }
}