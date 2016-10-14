import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import cookie from 'react-cookie';
import HeroImage from './../../HeroImage';
import LoginForm from './LoginForm';
var app = require('./../../../Firebase');

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
                var firstName = snapshot.child("first_name").val();
                var isAdmin = snapshot.child("is_admin").val();
                cookie.save("Name", firstName);
                cookie.save("Admin", isAdmin);
                window.location.href= "/#/admin/home";
            })
        }).catch(function(e){
            alert(e)
        });
    }
  
    render() {
        return (
            <div>
                <HeroImage />
                <LoginForm login={this._login}/>
            </div>
        );
    }
}