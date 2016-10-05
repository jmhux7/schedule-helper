import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Icon, Card, Row, Col, Input, CardPanel } from 'react-materialize';
import HandleLogin from './LandingComponents/HandleLogin';
import HandleNewUser from './LandingComponents/HandleNewUser';
import firebase from 'firebase';

export default class LandingPage extends Component {   

    render() {
        return (
        <div>
            <HandleNewUser />
        </div>
        )
    }

}