import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TimePickerElement extends Component {

    render() {
        return (
            <div>
                <TimePicker />
                <TimePicker />
            </div>
        )
    }





}