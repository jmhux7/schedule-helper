import React, { Component } from 'react';
import cookie from 'react-cookie';
import NavBar from './../../GlobalComponents/NavBar';
import EventForm from './EventForm';
var app = require('./../../Firebase');


export default class HandleNewEvent extends Component {

    constructor () {
        super();
        this._createEvent = this._createEvent.bind(this);
    }

    _createEvent (eventData) {
        app.database().ref().child('events').push({"event_name": eventData});   
    }

    render() {
        return (
        <div>
            <NavBar />
            <EventForm createEvent={this._createEvent} />
        </div>
        );
    }
}