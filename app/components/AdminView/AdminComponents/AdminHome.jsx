import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Col} from 'react-materialize';

import NavBar from './../../GlobalComponents/NavBar';

export default class AdminHome extends Component {

    render() {
        return(
            <div>
                <NavBar />
                <Col s={4}>
                    <a href="#"><div    className="create-teacher-schedule"><p>Create a Teacher Schedule</p></div></a>
                </Col>
                <Col s={4}>
                    <a href="#"><div className="create-meeting-supply"><p>Specify Meeting/Event Availability</p></div></a>
                </Col>
            </div>
        )
    }




}