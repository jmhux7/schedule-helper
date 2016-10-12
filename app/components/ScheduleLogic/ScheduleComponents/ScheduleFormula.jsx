import React, { Component } from 'react';
import cookie from 'react-cookie';
import {Col, Button, CardPanel} from 'react-materialize';
import NavBar from './../../GlobalComponents/NavBar';
import GatherAvailability from './GatherAvailability';
// import moment from 'moment';
// import Moment from 'react-moment';
import later from 'later';
import schedulejs from 'schedulejs';

export default class ScheduleFormula extends Component {

    constructor (props) {
        super(props);
        this.state = {
            teacherAvailability: '',
            eventAvailability: '',
            ready: false
        }
        this._createScheduleVerbage = this._createScheduleVerbage.bind(this);
    }

    _createScheduleVerbage(scheduleArr, eventArr) {
        var allSchedules = [];
        scheduleArr.forEach(function(x, i) {
            allSchedules.push({"name": x.name, "length": 1.25});        
            var arr = []
            x.schedule.forEach(function(y, j) {
                var scheduleItem = y;
                if(j == 0) {
                    arr.push(`after ${scheduleItem.after} and before ${scheduleItem.before}`);
                } else {
                    arr.push(` also after ${scheduleItem.after} and before ${scheduleItem.before}`);
                }                                       
            })
            allSchedules[i].availability = arr.join("");
        })
        // return allSchedules;
        var eventSchedule = [];
        eventArr.forEach(function(z, n) {
            eventSchedule.push({"name": z.event_name});
            var tempArr = []
            z.schedule.forEach(function(b, m) {
                var eventScheduleItem = b;
                tempArr.push(`every weekday after ${eventScheduleItem.after}am and before ${eventScheduleItem.before}pm`);
            })
            eventSchedule[n].availability = tempArr.join("");            
        }) 
        this.setState({
            teacherAvailability: allSchedules,
            eventAvailability: eventSchedule,
            ready: true
        })        
        console.log(this.state.teacherAvailability)
        console.log(this.state.eventAvailability)
    }

    

    render() {
        var p = later.parse.text;

        var teacherSchedules = this.state.teacherAvailability;
        var computerLab = this.state.eventAvailability;

        var t = schedule.tasks()
            .id(function(d) { return d.name; })
            .duration(function(d) { return d.length * 60; })
            .available(function(d) { return d.availability ? p(d.availability) : undefined; })
            .priority(function(d, i) { return 100 - i; })
            .minSchedule(function(d) { return d.length * 60; })
            .resources(['lab']);

        var tasks = t(teacherSchedules);

        var r = schedule.resources()
            .id(function(d) { return d.name; })
            .available(function(d) { return d.availability ? p(d.availability) : undefined; });

        var resources = r(computerLab);

        var start = new Date (2016, 9, 17);
        schedule.date.localTime();

        var s = schedule.create(tasks, resources, null, start);  


        var scheduleResults = [];
        for(var id in s.scheduledTasks) {
            var st = s.scheduledTasks[id];
            scheduleResults.push(<CardPanel className="light-blue darken-4 white-text"><h2>{ id }</h2>
            <p><b>Duration:</b>{ st.duration } mins</p>
            <p><b>Start:</b>{ new Date(st.earlyStart).toLocaleString() }</p>
            <p><b>Finish:</b>{ new Date(st.earlyFinish).toLocaleString() }</p></CardPanel>)
        }

        var data = this.props.teacherData;
        var eventData = this.props.eventData;
        var that = this;

        return (
            <Col>
                <Button className="teacher-list-wrap blue darken-4 schedule-button" onClick={() => that._createScheduleVerbage(data, eventData)}>Generate Schedule</Button>
                <div className="teacher-list-wrap">{scheduleResults}</div>
            </Col>


        )
    
    }


}