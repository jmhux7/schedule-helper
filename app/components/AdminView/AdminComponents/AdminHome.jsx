import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Nav, NavItem, NavDropdown, Navbar, MenuItem, Table, Grid, Row, Col, Input, FormGroup, Form, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

import NavBar from './../../GlobalComponents/NavBar';

export default class AdminHome extends Component {

    render() {
        return(
            <div>
                <NavBar />
                <a href="#"><div className="create-teacher-schedule"><p>Create a Teacher Schedule</p></div></a>
                <a href="#"><div className="create-meeting-supply"><p>Specify Meeting/Event Availability</p></div></a>
            </div>
        )
    }




}