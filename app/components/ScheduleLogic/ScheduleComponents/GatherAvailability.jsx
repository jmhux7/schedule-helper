import React, { Component } from 'react';
import cookie from 'react-cookie';
import NavBar from './../../GlobalComponents/NavBar';
import ScheduleFormula from './ScheduleFormula';
var app = require('./../../Firebase');

export default class GatherAvailability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teacherAvailability: [],
            eventsInfo:[],
            ready: false
        }
    }

    componentDidMount() {
        console.log("we are cookin all the schedules!!!");
        var query = app.database().ref('users').orderByChild("is_admin").startAt(false).endAt(false);
        var queryEvents = app.database().ref('events');
        query.once("value")
            .then(function(snapshot) {
                var teacherArr = [];
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    var key = Object.keys(childData.schedule)[0];
                    var schedules = childData.schedule[key]
                    teacherArr.push({"id": key, "name": childData.last_name + ', ' + childData.first_name, "schedule": schedules});
                })
                this.setState({
                    teachersInfo: teacherArr
                })
            }.bind(this))
            queryEvents.once("value")
                .then(function(eventShot) {
                    var eventArr = [];
                    eventShot.forEach(function(babySnapshot) {
                        var key = babySnapshot.key;
                        var babyData = babySnapshot.val();
                        var key = Object.keys(babyData.schedule)[0];
                        var eventSchedules = babyData.schedule[key];
                        eventArr.push({"id": key, "name": babyData.event_name, "schedule": eventSchedules});
                    })
                    this.setState({
                        eventsInfo: eventArr,
                        ready: true
                    })
            }.bind(this))
    }


    render() {
        return(
            <div>
                <NavBar />
                <ScheduleFormula teacherData={this.state.teachersInfo} eventData={this.state.eventsInfo} />
            </div>
        )
    }
}

