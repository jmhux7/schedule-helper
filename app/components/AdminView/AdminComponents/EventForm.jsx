import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';

import HandleNewEvent from './HandleNewEvent'

export default class EventForm extends Component {

    constructor () {
        super();
        this.state = {
            _name: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this);
        this._setName = this._setName.bind(this);
    }

    _setName(e){
        console.log(e.target.value)
        this.setState({
            _name: e.target.value
        })
    }

    _handleSubmit(e){
        e.preventDefault()        
        const name = this.state._name;
        this.props.createEvent(name)
    }

    render() {
        return (
            <div className="event-landing-container">
                <h3>Create a new event</h3>
                <Col className="new-event-container">
                    <CardPanel className="light-blue darken-4 white-text">
                        <form onSubmit={this._handleSubmit}>
                            <Input 
                                label="Event Name" 
                                type="text"
                                onChange={this._setName} 
                                />                 
                            <Button className="blue darken-4" waves="light" type ="submit">Submit</Button>                   
                        </form>
                    <a className="existing-events-link" href="/#/admin/events"><p>Go to existing events</p></a>
                    </CardPanel>
                </Col>
            </div>
        )
    }   
}