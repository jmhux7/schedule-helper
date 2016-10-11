import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';

import TimePicker from 'react-times';
import TeacherScheduleBasket from './TeacherScheduleBasket';
// import ProcessTeacherSchedule from './ProcessTeacherSchedule'
import TimePickerElement from './TimePickerElement';
import NavBar from './../../GlobalComponents/NavBar';

export default class CreateTeacherSchedule extends Component {
    constructor (props) {
        super(props);
        this.state = {
            scheduleBasket: [{},{}],
            teacherName: cookie.load("teacherName"),
            teacherId: cookie.load("teacherId")
        }
        this._updateSchedule = this._updateSchedule.bind(this);
        this._addClock = this._addClock.bind(this);
        // this._cancelClock = this._cancelClock.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _updateSchedule(entry, index){
        let oldSchedule = this.state.scheduleBasket;
        let newEntry = Object.assign({},oldSchedule[index], entry);
        oldSchedule[index] = newEntry;
        this.setState({
            scheduleBasket: oldSchedule
        })
    }

    _addClock(){
        let oldSchedule = this.state.scheduleBasket;
        oldSchedule.push({})
        this.setState({
            scheduleBasket: oldSchedule
        })
    }

    // _cancelClock(e) {
    //     console.log("Cancel After Before");
    //     this.setState({
    //         _numChildren: this.state._numChildren -= 2
    //     })
    // }


    _handleSubmit(e){
        e.preventDefault();
        const scheduleBasket = this.state.scheduleBasket;
        const teachersId = this.state.teacherId;
        this.props.postSchedule(scheduleBasket, teachersId);
    }

    render () {

        return (
            <div>
                <NavBar />            
                <Col className="new-schedule-container">
                    <CardPanel className="light-blue lighten-4 black-text">
                        <h3>Set {this.state.teacherName}'s schedule</h3>
                        <form onSubmit={this._handleSubmit}>
                            {this.state.scheduleBasket.map((item, index)=>{
                                return <TimePickerElement
                                    updateSchedule={this._updateSchedule}
                                    key={index}
                                    number={index}
                                    />
                            })}
                        <Button waves="light" type="submit">Add to schedule</Button>
                        </form>
                        <Button onClick={this._addClock}>Add more</Button>
                        <Button>Remove last schedule window</Button>
                    </CardPanel>
                    <TeacherScheduleBasket scheduleMounted={this.state.scheduleBasket} teachersId={this.state.teacherId} />
                </Col>
            </div>
        )
    }
}