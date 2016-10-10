import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import TeacherScheduleBasket from './TeacherScheduleBasket';

export default class CreateTeacherSchedule extends Component {
    constructor () {
        super();
        this.state = {
            _scheduleBasket: [],
        }
        this._addAfterBefore = this._addAfterBefore.bind(this);
    }

    _addAfterBefore(e) {
        console.log("After and Before init")
    }

    _handleSubmit(e){
        e.preventDefault();
        const scheduleBasket = this.state._scheduleBasket

        console.log(scheduleBasket)
        this.props.assignSchedule(scheduleBasket);
    }

    render () {
        return (            
            <Col className="new-user-container">
                <CardPanel className="light-blue lighten-4 black-text">
                    <TimePicker />
                    <TimePicker />

                    <h3>Create an account</h3>
                        <form onSubmit={this._handleSubmit}>
            

                        </form>
                    </CardPanel>
                </Col>
        )
    }
}