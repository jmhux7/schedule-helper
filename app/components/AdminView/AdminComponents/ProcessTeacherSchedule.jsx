// import React, { Image, Component } from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import cookie from 'react-cookie';
// import CreateTeacherSchedule from './CreateTeacherSchedule';
// import TeacherScheduleBasket from './TeacherScheduleBasket';
// var app = require('./../../../Firebase');

// export default class ProcessTeacherSchedule extends Component {

//     constructor () {
//         super();
//         this._teacherSchedule = this._teacherSchedule.bind(this);
//     }
  
//     _teacherSchedule (scheduleArr) {
//         const postSchedule = app.auth();
//         auth.signInWithEmailAndPassword(email, pass).then(function(user){
//             cookie.save("userID", user.uid);
//             app.database().ref('users/' + user.uid).on('value',function(snapshot){
//                 var firstName = snapshot.child("first_name").val();
//                 var isAdmin = snapshot.child("is_admin").val();
//                 cookie.save("Name", firstName);
//                 cookie.save("Admin", isAdmin);
//                 window.location.href= "/";
//             })
//         }).catch(function(e){
//             alert(e)
//         });
//     }
  
//     render() {
//         return (
//             <div>
//                 <TeacherScheduleBasket teacherSchedule={this.state.scheduleBucket} />
//             </div>
//         );
//     }
// }