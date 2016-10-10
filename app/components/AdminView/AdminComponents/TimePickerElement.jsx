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

        this._onHourChange = this._onHourChange.bind(this);
        this._onMinuteChange = this._onMinuteChange.bind(this);
        this._onTimeChange = this._onTimeChange.bind(this);
        this._onFocusChange = this._onFocusChange.bind(this);

    }

    _onHourChange(hour) {

    }
 
    _onMinuteChange(minute) {

    }
 
    _onTimeChange(time) {

    }
 
    _onFocusChange(focusStatue) {

    }



    render() {
    
        var myClocks = this.props.clockItems;
        const childrenClocks = [];

        for (var i = 0; i < myClocks; i++) {
            childrenClocks.push(<TimePicker
                                    onFocusChange={this._onFocusChange}
                                    onHourChange={this._onHourChange}
                                    onMinuteChange={this._onMinuteChange}
                                    onTimeChange={this._onTimeChange}
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