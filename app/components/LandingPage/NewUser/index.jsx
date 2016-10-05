import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HandleNewUser from './NewUserComponents/HandleNewUser';
import firebase from 'firebase';

export default class NewUser extends Component {   

    render() {
        return (
        <div>
            <HandleNewUser />
        </div>
        )
    }

}