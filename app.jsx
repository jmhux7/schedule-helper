import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
require('react-times/css/material/default.css');
import './css/style.css';
import Login from './app/components/LandingPage/Login/index';
import NewUser from './app/components/LandingPage/NewUser/index';
import AdminView from './app/components/AdminView/index';
import UserView from './app/components/UserView/index';
import TeacherSel from './app/components/AdminView/teacherSel';
import EventSchedule from './app/components/AdminView/eventSchedule';
import EventSel from './app/components/AdminView/eventSel';
import CreateTeacherSchedule from './app/components/AdminView/AdminComponents/CreateTeacherSchedule';
import NewEvent from './app/components/AdminView/newEvent'; 
import GatherAvailability from './app/components/ScheduleLogic/ScheduleComponents/GatherAvailability';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={Login} />
    <Route path="/signup" component={NewUser} />
    <Route path="/admin/home" component={AdminView} />
    <Route path="/admin/teachers" component={TeacherSel} />
    <Route path="/user/home" component={UserView} />
    <Route path="/admin/teachers/make-schedule" component={CreateTeacherSchedule} />
    <Route path="/admin/events" components={EventSel} />
    <Route path="/admin/events/new" component={NewEvent} />
    <Route path="/admin/events/make-schedule" component={EventSchedule} />
    <Route path="/admin/schedules/test" component={GatherAvailability} />



  </Router>,

  document.getElementById('app')
);