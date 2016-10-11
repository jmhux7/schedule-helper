import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';

import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TeacherScheduleBasket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            ready: false
        }
    }

    _postSchedule(scheduleArr, id) {
        var newPostKey = firebase.database().ref().child('schedule').push().key;
        var updates = {};
        updates['/posts/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
    }
    

    render() {
        return (  
            <Col className="schedule-basket-container">
                <CardPanel className="light-blue lighten-4 black-text">
                    <h3>Preview your schedule</h3>
                    <CreateTeacherSchedule postSchedule={this._postSchedule} />
                    
                </CardPanel>
            </Col>
        )
    }    
}