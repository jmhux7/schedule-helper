import React, { Component } from 'react';
import cookie from 'react-cookie';
import {Col, Button} from 'react-materialize';
import NavBar from './../../GlobalComponents/NavBar';
import GatherAvailability from './GatherAvailability';
import moment from 'moment';

export default class ScheduleFormula extends Component {

    constructor (props) {
        super(props);
        this.state = {
            teacherAvailability: '',
            eventAvailability: ''
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
                tempArr.push(`every weekday after ${eventScheduleItem.after} and before ${eventScheduleItem.before}`);
            })
            eventSchedule[n].availability = tempArr.join("");            
        }) 
        this.setState({
            teacherAvailability: allSchedules,
            eventAvailability: eventSchedule
        })        
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

        var start = new Date (2016, 9, 10);
        schedule.date.localTime();

        var s = schedule.create(tasks, resources, null, start);        

        for(var id in s.scheduledTasks) {
            var st = s.scheduledTasks[id];
            console.log(st);
        //     document.write('<h2>' + id + '</h2>');
        //     document.write('<p><b>Duration:</b> ' + st.duration + ' mins</p>');
        //     document.write('<p><b>Start:</b> ' + new Date(st.earlyStart).toLocaleString() + '</p>');
        //     document.write('<p><b>Finish:</b> ' + new Date(st.earlyFinish).toLocaleString() + '</p>');
        }

        var data = this.props.teacherData;
        var eventData = this.props.eventData;
        var that = this;

        return (
            <Col>
                <Button onClick={() => that._createScheduleVerbage(data, eventData)}>Generate Schedule</Button>
            </Col>


        )
    }


}