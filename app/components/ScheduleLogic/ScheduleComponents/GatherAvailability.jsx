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
            ready: false
        }
    }

    componentDidMount() {
        console.log("we are cookin all the schedules!!!");
        var query = app.database().ref('users').orderByChild("is_admin").startAt(false).endAt(false);
        var querySchedule = app.database().ref('users/schedule');
        query.once("value")
            .then(function(snapshot) {
                var teacherArr = [];
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    var key = Object.keys(childData.schedule)[0];
                    var schedules = childData.schedule[key]
                    teacherArr.push({"id": key, "name": childData.last_name + ',' + childData.first_name, "schedule": schedules});
                    // console.log(teacherArr)
                })
                this.setState({
                    teachersInfo: teacherArr,
                    ready: true
                })
                // console.log(this.state.teachersInfo)
        }.bind(this))
    }


    render() {
        return(
            <ScheduleFormula teacherData={this.state.teachersInfo} />
        )
    }
}

