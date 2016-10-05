import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Icon, Card, Row, Col, Input, CardPanel } from 'react-materialize';
import cookie from 'react-cookie';

import LoginForm from './LoginForm';

export default class HandleLogin extends Component {

    constructor () {
        super();
        this._login = this._login.bind(this);
    }
  
    _login (email, pass) {
        const auth = app.auth();
        auth.signInWithEmailAndPassword(email, pass).then(function(user){
            cookie.save("userID", user.uid);
            app.database().ref('users/' + user.uid).on('value',function(snapshot){
                var name = snapshot.child("firstName").val();
                cookie.save("Name", firstName);
                window.location.href= "/";
            })
        }).catch(function(e){
            alert(e)
        });
    }
  
    render() {
        return (
            <LogInForm login={this._login}/>
        );
    }
}