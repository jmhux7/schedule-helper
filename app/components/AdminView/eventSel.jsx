import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-materialize';
import $ from 'jquery';

import HeroImage2 from './../GlobalComponents/HeroImage2';


import NavBar from './../GlobalComponents/NavBar';
import EventCall from './AdminComponents/EventCall';

export default class EventSel extends Component {

  render () {
    return(
        <div>
            <HeroImage2 />
            <EventCall />
        </div>
    )
  }
}