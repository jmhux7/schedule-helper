import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TimePickerElement extends Component {
 
    onTimeChangeOne(time) {
        console.log("poof! ** updating one");
        console.log(time);
        this.props.updateSchedule({
            after: time
        },this.props.number)
    }

    onTimeChangeTwo(time) {
        console.log("poof! ** updating two")
        console.log(time);
        this.props.updateSchedule({
            before: time
        },this.props.number)
    }

    render() {
        return <div className="entry">
            <CardPanel className="clock-container">
                <p>Available After:</p>
                <TimePicker
                    onTimeChange={this.onTimeChangeOne.bind(this)}
                    defaultTime="9:00"
                />
            </CardPanel>
            <CardPanel className="clock-container">
                <p>And Before:</p>
                <TimePicker
                    onTimeChange={this.onTimeChangeTwo.bind(this)}
                    defaultTime="04:00"
                />
            </CardPanel>
            <div className="div-sep"></div>
        </div>;
    }

}