import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Col, CardPanel} from 'react-materialize';

export default class AdminHome extends Component {

    render() {
        return(
            <div className="admin-dash-wrapper">
                <Col id="teacher-schedule-card">
                    <CardPanel className="admin-card light-blue darken-4 white-text z-depth-4">
                        <a className="admin-links" href="/#/admin/teachers"><div    className="create-teacher-schedule">
                        <p className="schedule-card-content">Create a Teacher's Schedule</p></div></a>
                    </CardPanel>
                </Col>
                <Col id="meeting-schedule-card">
                    <CardPanel className="admin-card light-blue darken-4 white-text z-depth-4">
                        <a className="admin-links" href="/#/admin/events/new"><div className="create-meeting-supply"><p className="schedule-card-content">Specify the availability of a meeting or event</p></div></a>
                    </CardPanel>
                </Col>
                <Col id="meeting-schedule-card">
                    <CardPanel className="admin-card light-blue darken-4 white-text z-depth-4">
                        <a className="admin-links" href="/#/admin/schedules/test"><div className="create-meeting-supply"><p className="schedule-card-content">Generate a schedule</p></div></a>
                    </CardPanel>
                </Col>
            </div>
        )
    }

}