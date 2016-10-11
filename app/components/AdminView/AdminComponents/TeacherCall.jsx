import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Firebase from 'firebase';
var app = require('./../../Firebase');

import TeacherList from './TeacherList';
import NavBar from './../../GlobalComponents/NavBar';

export default class TeacherCall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }


  componentDidMount () {
    console.log("we are cookin");
    var query = app.database().ref('users').orderByChild("is_admin").startAt(false).endAt(false);  
    query.once("value")
        .then(function(snapshot) {
            var teacherArr = [];
            var teacherIdArr = [];
            var teacherNames = [];
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childData);
                teacherArr.push(childData.first_name + " " + childData.last_name);
                teacherIdArr.push(key);
                teacherNames.push(childData.first_name);
            })
            this.setState({
                items: teacherArr,
                ids: teacherIdArr,
                names: teacherNames,
                ready: true
            })
        }.bind(this))
  }

//   componentWillUnmount () {
//     this.serverRequest.abort();
//   }

  render() {
    if(this.state.ready === true){
        return (
        <div>
            <NavBar />
            <div className="body-wrapper">
                <h2>Registered Teachers</h2>
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