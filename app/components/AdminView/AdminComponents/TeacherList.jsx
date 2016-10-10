import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';

import TeacherCall from './TeacherCall';

export default class TeacherList extends Component {

    render() {
        var teachers = this.props.allTeachers;
        var teacherIds = this.props.teacherIds;

        var teacherNames = teachers.map(function(item, i) {
            return (
                <CollectionItem href={ teacherIds[i] }>{item}</CollectionItem>
            )
        })

        return (
            <Collection>{ teacherNames }</Collection>
        );
    }
}