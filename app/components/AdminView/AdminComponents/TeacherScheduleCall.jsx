import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Firebase from 'firebase';
var app = require('./../../Firebase');

import EventList from './EventList';
import NavBar from './../../GlobalComponents/NavBar';

export default class TeacherScheduleCall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount () {
    console.log("we got teacher schedules");
    var query = app.database().ref('users/schedule').orderByChild("is_admin").startAt(false).endAt(false);
    query.once("value")
        .then(function(snapshot) {
            var teacherArr = [];
            var teacherIdArr = [];
            var teacherNames = [];
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childData);
                // teacherArr.push(childData.first_name + " " + childData.last_name);
                // teacherIdArr.push(key);
                // teacherNames.push(childData.first_name);
            })
            this.setState({
                // items: teacherArr,
                // ids: teacherIdArr,
                // names: teacherNames,
                ready: true
            })
        }.bind(this))
  }

  render() {
    if(this.state.ready === true){
        return (
        <div>
            <NavBar />
            <div className="body-wrapper">
                <h3 className="reg-teacher-head">Registered Teachers</h3>
                <div className="teacher-list-wrap">
                    <TeacherList allTeachers={this.state.items} teacherIds={this.state.ids} teacherNames={this.state.names} />
                </div>
            </div>
        </div>
        )
    } else {
        return null
    }
  };
}




}
