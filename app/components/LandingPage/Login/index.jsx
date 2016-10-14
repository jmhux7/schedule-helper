import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HandleLogin from './LoginComponents/HandleLogin';
import LoadingAnimation from './../../GlobalComponents/LoadingAnimation';
import LandingNav from './../../GlobalComponents/LandingNav';

import firebase from 'firebase';

export default class Login extends Component {   

    render() {
        return (
        <div>
            <LandingNav />
            <HandleLogin />
        </div>
        )
    }

}