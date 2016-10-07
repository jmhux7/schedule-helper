import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import firebase from 'firebase';

import AdminHome from './AdminComponents/AdminHome';

export default class AdminView extends Component {   

    render() {
        return (
        <div>
            <AdminHome />
        </div>
        )
    }

}