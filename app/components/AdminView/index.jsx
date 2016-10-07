import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import firebase from 'firebase';
import NavBar from './../GlobalComponents/NavBar';

export default class AdminView extends Component {   

    render() {
        return (
        <div>
            <NavBar />
        </div>
        )
    }

}