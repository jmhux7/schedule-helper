import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';
import cookie from 'react-cookie';

import EventCall from './EventCall';

export default class EventList extends Component {

    _sendToSchedule(name, id) {
        console.log("send to schedule init");
        console.log("name is ", name);
        console.log("id is ", id);

        cookie.save("eventName", name);
        cookie.save("eventId", id);
    }

    render() {
        var events = this.props.allEvents;
        console.log("events are ", events);
        var eventIds = this.props.eventIds;
        var that = this;        

        var eventShow = events.map(function(item, i) {
            return (
                <div key={i}>
                <Link className="event-list" to="/admin/events/make-schedule" key={i} onClick={() => that._sendToSchedule(events[i], eventIds[i])}>{item}</Link>
                </div>
            )            
        })

        return (
            <ul>{ eventShow }</ul>
        );
    }
}