import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col } from 'react-materialize';
import $ from 'jquery';
import HeroImage2 from './../GlobalComponents/HeroImage2';


import NavBar from './../GlobalComponents/NavBar';
import CreateEventSchedule from './AdminComponents/CreateEventSchedule';

export default class EventSchedule extends Component {

  render () {
    return(
        <div>
            <HeroImage2 />
            <CreateEventSchedule />
        </div>
    )
  }
}