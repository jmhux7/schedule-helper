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

    _postSchedule(scheduleArr, userId) {
        console.log(scheduleArr);
        var newPostKey = app.database().ref().child('user-schedule').push().key;
        var updates = {};
        console.log("new post key is ", newPostKey);
        updates['/users/' + userId + '/schedule' + '/' + newPostKey] = scheduleArr;
        return app.database().ref().update(updates);
    }
    

    render() {
        var basket = this.props.scheduleMounted
        var teacherId = this.props.teachersId
        var that = this
        return (  
            <Col className="schedule-basket-container">
                <Button className="blue darken-3" waves="light" onClick={() => that._postSchedule(basket, teacherId)}>Post Schedule</Button>
            </Col>
        )
    }    
}