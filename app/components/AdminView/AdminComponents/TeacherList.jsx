import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';
import cookie from 'react-cookie';

import TeacherCall from './TeacherCall';

export default class TeacherList extends Component {

    // constructor() {
    //     super();
    //     this._sendToSchedule = this._sendToSchedule.bind(this);
    // }

    _sendToSchedule(id, name) {
        cookie.save("teacherName", name);
        cookie.save("teacherId", id);
        window.location.href="/#/admin/teachers/make-schedule";
    }

    render() {
        var teachers = this.props.allTeachers;
        var teacherIds = this.props.teacherIds;
        var teacherFirstNames = this.props.teacherNames;
        var that = this;
        

        var teacherNames = teachers.map(function(item, i) {
            return (
                <li onClick={ that._sendToSchedule.bind(that, teacherIds[i], teacherFirstNames[i]) }>{item}</li>
            )            
        })

        return (
            <ul>{ teacherNames }</ul>
        );
    }
}