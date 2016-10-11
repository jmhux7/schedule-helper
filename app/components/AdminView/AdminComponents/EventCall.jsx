import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Firebase from 'firebase';
var app = require('./../../Firebase');

import EventList from './EventList';
import NavBar from './../../GlobalComponents/NavBar';

export default class EventCall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount () {
    console.log("we are cookin events");
    var query = app.database().ref('events');  
    query.once("value")
        .then(function(snapshot) {
            var eventArr = [];
            var eventIdArr = [];
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childData);
                eventArr.push(childData.event_name);
                eventIdArr.push(key);
            })
            this.setState({
                items: eventArr,
                ids: eventIdArr,
                ready: true
            })
        }.bind(this))
  }

//   componentWillUnmount () {
//     this.serverRequest.abort();
//   }

  render() {
    console.log("items are ", this.state.items);
    if(this.state.ready === true){
        return (
        <div>
            <NavBar />
            <div className="body-wrapper">
                <h2>Registered Events</h2>
                <div className="teacher-list-wrap">
                    <EventList allEvents={this.state.items} eventIds={this.state.ids} />
                </div>
            </div>
        </div>
        )
    } else {
        return null
    }
  };
}