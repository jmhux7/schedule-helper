import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
var app = require('./../../Firebase');

import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TeacherScheduleBasket extends Component {

    constructor(props) {
        super(props);
        this._postSchedule = this._postSchedule.bind(this);
    }

    _postSchedule(scheduleArr, id) {
        console.log(scheduleArr);
        // var newPostKey = firebase.database().ref().child('user-schedule').push().key;
        // var updates = {};
        // updates['/schedule/' + newPostKey] = postData;
        // updates['/schedule/' + userId + '/' + newPostKey] = postData;
    }
    

    render() {
        var basket = this.props.scheduleMounted
        var teacherId = this.props.teachersId
        var that = this
        return (  
            <Col className="schedule-basket-container">
                <Button waves="light" onClick={() => that._postSchedule(basket, teacherId)}>Post Schedule</Button>
                <CardPanel className="light-blue lighten-4 black-text">
                    <h3>Preview your schedule</h3>
                </CardPanel>
            </Col>
        )
    }    
}