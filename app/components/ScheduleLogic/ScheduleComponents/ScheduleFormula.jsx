import React, { Component } from 'react';
import cookie from 'react-cookie';
import {Col, Button} from 'react-materialize';
import NavBar from './../../GlobalComponents/NavBar';
import GatherAvailability from './GatherAvailability';

export default class ScheduleFormula extends Component {

    constructor () {
        super();
        this._createScheduleVerbage = this._createScheduleVerbage.bind(this);
    }

    _createScheduleVerbage(scheduleArr) {
        var allSchedules = [];
        scheduleArr.forEach(function(x, i) {
            allSchedules.push({"name": x.name, "length": 1.5})           
            var arr = []
            x.schedule.forEach(function(y, j) {
                var scheduleItem = y;
                if(j == 0) {
                    arr.push(`after ${scheduleItem.after} and before ${scheduleItem.before}`);
                    // console.log(arr)
                } else {
                    arr.push(` also after ${scheduleItem.after} and before ${scheduleItem.before}`);
                    // console.log(arr)
                }
                                       
            })
            allSchedules[i].availability = arr.join("")
            console.log("arrrrrrrrrrrrrrrrr ", arr)
        })
        console.log(allSchedules)
    }

    render() {
        var data = this.props.teacherData;
        var that = this;

        return (
            <Col>
                <Button onClick={() => that._createScheduleVerbage(data)}>Generate Schedule</Button>
            </Col>


        )
    }


}