import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';

import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TeacherScheduleBasket extends Component {

    render() {
        return (  
            <Col className="schedule-basket-container">
                <CardPanel className="light-blue lighten-4 black-text">
                    <h3>Preview your schedule</h3>
                    
                </CardPanel>
            </Col>
        )
    }    
}