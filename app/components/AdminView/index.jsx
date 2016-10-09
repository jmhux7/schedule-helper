import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import firebase from 'firebase';

import AdminHome from './AdminComponents/AdminHome';
import NavBar from './../GlobalComponents/NavBar';
import CreateTeacherSchedule from './AdminComponents/CreateTeacherSchedule';

export default class AdminView extends Component {

    render() {
        return (
        <div>
            <NavBar />
            <AdminHome />
        </div>
        )
    }

}