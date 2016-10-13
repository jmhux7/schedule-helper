import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
var app = require('./../../Firebase');

import CreateEventSchedule from './CreateEventSchedule';

export default class EventScheduleBasket extends Component {

    constructor(props) {
        super(props);
        this._postSchedule = this._postSchedule.bind(this);
    }

    _postSchedule(scheduleArr, eventId) {
        console.log(scheduleArr);
        console.log("post id ", eventId);
        var newPostKey = app.database().ref().child('schedule').push().key;
        var updates = {};
        console.log("new post key is ", newPostKey);
        updates['/events/' + eventId + '/schedule' + '/' + newPostKey] = scheduleArr;
        return app.database().ref().update(updates);
    }
    

    render() {
        var basket = this.props.scheduleMounted
        var eventId = this.props.eventsId
        var that = this
        return (  
            <Col className="schedule-basket-container">
                <Button className="blue dark-4" waves="light" onClick={() => that._postSchedule(basket, eventId)}>Post Schedule</Button>
            </Col>
        )
    }    
}