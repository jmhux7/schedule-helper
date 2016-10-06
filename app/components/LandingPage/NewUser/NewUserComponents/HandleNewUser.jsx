import React, { Component } from 'react';
import cookie from 'react-cookie';
import HeroImage from './../../HeroImage';
import NewUserForm from './NewUserForm';
var app = require('./../../../Firebase');


export default class HandleNewUser extends Component {

  constructor () {
    super();
    this._signup = this._signup.bind(this);
  }

  _signup (email, pass, firstName, lastName, isAdmin, adminKey) {
      console.log("made it this far")
      const auth = app.auth();
                console.log(adminKey);
                if(adminKey == 777 && isAdmin === true) {
                  auth.createUserWithEmailAndPassword(email, pass).then(function(user){
                      app.database().ref('users/'+user.uid).set({first_name: firstName, last_name: lastName, email: email, is_admin: isAdmin}, function(){
                        cookie.save("Admin", isAdmin)
                        cookie.save("userID", user.uid)
                        cookie.save("Name", firstName)
                        window.location.href= "/";  
                      })
                    }).catch(e=>alert(e.message));
                } else if (isAdmin === false) {
                  auth.createUserWithEmailAndPassword(email, pass).then(function(user){
                      app.database().ref('users/'+user.uid).set({first_name: firstName,last_name: lastName, email: email, is_admin: isAdmin}, function(){
                        cookie.save("Admin", isAdmin)
                        cookie.save("userID", user.uid)
                        cookie.save("Name", firstName)
                        window.location.href= "/";
                    })
                  }).catch(e=>alert(e.message));
                } else {
                  alert("not a valid admin code")
                }          
      }

  render() {
    return (
      <div>
        <HeroImage />
        <NewUserForm signup={this._signup} />
      </div>
    );
  }
}