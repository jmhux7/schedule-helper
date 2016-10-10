import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import CreateTeacherSchedule from './CreateTeacherSchedule';

export default class TimePickerElement extends Component {

    constructor () {
        super();
        this.state = {
            _scheduleBasket: 0,
            _numChildren: 1
        }
        this._addAfterBefore = this._addAfterBefore.bind(this);
        this._cancelAfterBefore = this._cancelAfterBefore.bind(this);
    }

    onHourChange(hour) {

    }
 
    onMinuteChange(minute) {

    }
 
    onTimeChange(time) {

    }
 
    onFocusChange(focusStatue) {

    }

    render() {
    
    var myClocks = this.props.clockItems;
    const childrenClocks = [];

    for (var i = 0; i < myClocks; i++) {
        childrenClocks.push(<TimePicker
                                onFocusChange={this.onFocusChange.bind(this)}
                                onHourChange={this.onHourChange.bind(this)}
                                onMinuteChange={this.onMinuteChange.bind(this)}
                                onTimeChange={this.onTimeChange.bind(this)}
                            />);
    };

    var parseClocks = childrenClocks.map(function(item, i) {
        return (
            <CardPanel className="clock-container">
                <p className="time-label">Available after:</p>
                    { item }
                <p className="time-label">And before:</p>    
                    { item }
            </CardPanel>
        )
    })

        return (
            <div>
                { parseClocks }
            </div>
        )
    }
}