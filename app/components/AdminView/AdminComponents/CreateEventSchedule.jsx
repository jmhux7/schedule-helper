import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import TimePicker from 'react-times';
import EventScheduleBasket from './EventScheduleBasket';
// import ProcessTeacherSchedule from './ProcessTeacherSchedule'
import TimePickerElement from './TimePickerElement';
import NavBar from './../../GlobalComponents/NavBar';

export default class CreateEventSchedule extends Component {
    constructor (props) {
        super(props);
        this.state = {
            scheduleBasket: [{}],
            eventName: cookie.load("eventName"),
            eventId: cookie.load("eventId")
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

    _cancelClock(e) {
        let oldSchedule = this.state.scheduleBasket;
        oldSchedule.pop();
        this.setState({
            scheduleBasket: oldSchedule
        })
    }


    _handleSubmit(e){
        e.preventDefault();
        const scheduleBasket = this.state.scheduleBasket;
        const eventsId = this.state.eventId;
        this.props.postSchedule(scheduleBasket, eventsId);
    }

    render () {

        return (
            <div>
                <NavBar />            
                <Col className="new-schedule-container">
                    <CardPanel className="light-blue darken-4 white-text">
                        <h3>Set {this.state.eventName} schedule</h3>
                        <form onSubmit={this._handleSubmit}>
                            {this.state.scheduleBasket.map((item, index)=>{
                                return <TimePickerElement
                                    updateSchedule={this._updateSchedule}
                                    key={index}
                                    number={index}
                                    />
                            })}
                        </form>
                        <Button className="blue darken-3" onClick={this._addClock}>Add more</Button>
                        <Button className="blue darken-3" onClick={this._cancelClock}>Remove last schedule window</Button>
                    </CardPanel>
                    <EventScheduleBasket scheduleMounted={this.state.scheduleBasket} eventsId={this.state.eventId} />
                </Col>
            </div>
        )
    }
}