import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';
import cookie from 'react-cookie';

import TeacherCall from './TeacherCall';

export default class TeacherList extends Component {

    _sendToSchedule(name, id) {
        cookie.save("teacherName", name);
        cookie.save("teacherId", id);
    }

    render() {
        var teachers = this.props.allTeachers;
        var teacherIds = this.props.teacherIds;
        var teacherFirstNames = this.props.teacherNames;
        var that = this;        

        var teacherNames = teachers.map(function(item, i) {
            return (
                <div key={i}>
                <Link to="/admin/teachers/make-schedule" className="teacher-list" key={i} onClick={() => that._sendToSchedule(teacherFirstNames[i], teacherIds[i])}>{item}</Link>
                </div>
            )            
        })

        return (
            <ul>{ teacherNames }</ul>
        );
    }
}