import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import TeacherScheduleBasket from './TeacherScheduleBasket';
import TimePickerElement from './TimePickerElement';
import NavBar from './../../GlobalComponents/NavBar';

export default class CreateTeacherSchedule extends Component {
    constructor () {
        super();
        this.state = {
            _scheduleBasket: 0,
            _numChildren: 1
        }
        this._addAfterBefore = this._addAfterBefore.bind(this);
        this._cancelAfterBefore = this._cancelAfterBefore.bind(this);
    }

    _addAfterBefore(e) {
        console.log("After and Before init")
        this.setState({
            _numChildren: this.state._numChildren += 1
        });
    }

    _cancelAfterBefore(e) {
        console.log("Cancel After Before");
        this.setState({
            _numChildren: this.state._numChildren -= 1
        })
    }

    _addToScheduleBasket(e) {

    }

    _handleSubmit(e){
        e.preventDefault();
        const scheduleBasket = this.state._scheduleBasket

        console.log(scheduleBasket)
        this.props.assignSchedule(scheduleBasket);
    }

    render () {

        return (
            <div>
                <NavBar />            
                <Col className="new-schedule-container">
                    <CardPanel className="light-blue lighten-4 black-text">
                        <h3>Set the schedule</h3>
                        <form className="teacher-times" onSubmit={this._handleSubmit}>
                            <TimePickerElement clockItems={this.state._numChildren} />
                        </form>
                        <Button onClick={this._addAfterBefore}>Add availability window</Button>
                        <Button onClick={this._cancelAfterBefore}>Remove last availability window</Button>
                        <Button onClick={this._addToScheduleBasket}>Add to schedule</Button>
                    </CardPanel>
                    <TeacherScheduleBasket />
                </Col>
            </div>
        )
    }
}