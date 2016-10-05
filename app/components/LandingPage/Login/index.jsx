import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HandleLogin from './LoginComponents/HandleLogin';
import firebase from 'firebase';

export default class Login extends Component {   

    render() {
        return (
        <div>
            <HandleLogin />
        </div>
        )
    }

}