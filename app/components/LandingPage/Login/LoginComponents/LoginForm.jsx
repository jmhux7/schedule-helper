import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col, Input, FormGroup, Form, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

import HandleLogin from './HandleLogin'

export default class LoginForm extends Component {

    constructor () {
        super();
        this.state = {
            _email: '',
            _password: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this);
        this._setEmail = this._setEmail.bind(this);
        this._setPassword = this._setPassword.bind(this);
    }

    _setEmail(e){
        console.log(e.target.value)
        this.setState({
            _email: e.target.value
        })
    }
    _setPassword(e){
        console.log(e.target.value)
        this.setState({
        _password: e.target.value
        })
    }

    _handleSubmit(e){
        e.preventDefault()
        
        const email = this.state._email;
        const password = this.state._password;
        console.log(email);
        console.log(password);
        this.props.login(email, password)
    }

    render() {
        return (
            <div className="container">
                <h3>Welcome to the Schedule Helper</h3>
                <Form horizontal onSubmit={this._handleSubmit}>
                    <FormGroup>
                        <ControlLabel className="nav-form-text">Email</ControlLabel>
                        <Col sm={10}>
                            <FormControl 
                                type="email"
                                onChange={this._setEmail} 
                                placeholder="email"                      
                                 />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel className="nav-form-text">Password</ControlLabel>
                        <Col sm={10}>
                            <FormControl
                                type="password"
                                onChange={this._setPassword}
                                placeholder="password"
                                 />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button className="btn btn-success" type ="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>                      
            </div>
        )
    }   
}

