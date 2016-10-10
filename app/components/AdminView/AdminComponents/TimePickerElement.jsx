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
            _numChildren: 1,
            _hour: ''
        }
        this._onTimeChange = this._onTimeChange.bind(this);

    }
 
    _onTimeChange(time) {
        console.log(time);
    }



    render() {
    
        var myClocks = this.props.clockItems;
        const childrenClocks = [];

        for (var i = 0; i < myClocks; i++) {
            childrenClocks.push(<TimePicker
                                    number={i + 1}
                                    key={i + 1}
                                    onTimeChange={this._onTimeChange}
                                    defaultTime="04:00"
                                />);
        };

        var parseClocks = childrenClocks.map(function(item, i) {
            if(i % 2 ===0) {
                return (
                    <div>
                        <h6>Schedule Block</h6>
                        <CardPanel className="clock-container">
                            <p className="time-label">Available after:</p>
                            {item}
                        </CardPanel>
                    </div>
                )
            } else {
                return (
                    <div>
                        <CardPanel className="clock-container">
                            <p className="time-label">And before:</p>  
                            {item}
                        </CardPanel>
                        <div className="div-sep"></div>
                    </div>
                )
            }
        
        })

        return (
            <div>
                { parseClocks }
            </div>
        )
    }
}