import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-materialize';
import $ from 'jquery';

import NavBar from './../GlobalComponents/NavBar';
import EventCall from './AdminComponents/EventCall';

export default class EventSel extends Component {

  render () {
    return(
        <div>
            <EventCall />
        </div>
    )
  }
}