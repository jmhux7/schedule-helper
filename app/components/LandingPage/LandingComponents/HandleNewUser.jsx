import React, { Component } from 'react';
import cookie from 'react-cookie';
var app = require('./../../Firebase');

import NewUserForm from './NewUserForm';


export default class HandleNewUser extends Component {

  constructor () {
    super();
    this._signup = this._signup.bind(this);
  }

  _signup (email, pass, firstName, lastName) {
    console.log("made it this far")
    const auth = app.auth();
          auth.createUserWithEmailAndPassword(email, pass).then(function(user){
            console.log(user.firstName)
          app.database().ref('users/'+user.uid).set({first_name: firstName, last_name: lastName, email: email}, function(){
            cookie.save("userID", user.uid)
            cookie.save("Name", user.first_name)
            window.location.href= "/";
          })
      }).catch(e=>alert(e.message));

      }
  render() {
    return (
      <NewUserForm signup={this._signup}/>
    );
  }
}