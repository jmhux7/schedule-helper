import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Nav, NavItem, NavDropdown, MenuItem, Table, Grid, Row, Col, Input, FormGroup, Form, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

import HandleNewUser from './HandleNewUser';


export default class NewUserForm extends Component {
    constructor () {
        super();
        this.state = {
            _firstName: '',
            _lastName: '',
            _email: '',
            _isAdmin: false,
            _adminKey: '',
            _password: '',
            _passwordAgain: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this);
        this._setFirstName = this._setFirstName.bind(this);
        this._setLastName = this._setLastName.bind(this);
        this._setIsAdmin = this._setIsAdmin.bind(this);
        this._setAdminKey = this._setAdminKey.bind(this);
        this._setEmail = this._setEmail.bind(this);
        this._setPassword = this._setPassword.bind(this);
        this._setPasswordAgain = this._setPasswordAgain.bind(this);
    }

    _setFirstName(e){
        this.setState({
            _firstName: e.target.value
        })
    }

    _setLastName(e){
        this.setState({
            _lastName: e.target.value
        })
    }

    _setEmail(e){
        this.setState({
            _email: e.target.value
        })
    }

    _setIsAdmin(e){
        this.setState({
            _isAdmin: e.target.checked
        })
    }

    _setAdminKey(e){
        this.setState({
            _adminKey: e.target.value
        })
        console.log(this.state._adminKey)
    }

    _setPassword(e){
        this.setState({
            _password: e.target.value
        })
    }

    _setPasswordAgain(e){
        this.setState({
            _passwordAgain: e.target.value
        })
    }

    _handleSubmit(e){
        e.preventDefault();
        const email = this.state._email
        const password = this.state._password
        const passwordAgain = this.state._passwordAgain
        const firstName = this.state._firstName
        const lastName = this.state._lastName
        const isAdmin = this.state._isAdmin
        const adminKey = this.state._adminKey
        console.log(email)
        if (password !== passwordAgain) {
            return alert('your passwords do not match!');
        }
        this.props.signup(email, password, firstName, lastName, isAdmin, adminKey);
    }

    render () {
        return (
            <div className="container">
            <h3>Create an account to automate your schedule</h3>
                <Form horizontal onSubmit={this._handleSubmit}>
                    <FormGroup>
                        <ControlLabel className="nav-form-text">First Name</ControlLabel>  
                        <Col sm={10}>              
                            <FormControl 
                                type="text" 
                                onChange={this._setFirstName} 
                                placeholder="first name" 
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel className="nav-form-text">Last Name</ControlLabel>  
                        <Col sm={10}>  
                            <FormControl 
                                type="text" 
                                onChange={this._setLastName} 
                                placeholder="last name"
                                />
                        </Col>
                    </FormGroup>
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
                        <ControlLabel className="nav-form-text">I am the schedule admin?</ControlLabel>  
                        <Col sm={10}>  
                            <Checkbox
                                type="checkbox"
                                onClick={this._setIsAdmin}
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel className="nav-form-text">Admin Code</ControlLabel>  
                        <Col sm={10}>  
                            <FormControl
                                type="number"
                                max="999"
                                placeholder="if applicable enter your admin code"
                                onChange={this._setAdminKey}
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
                        <ControlLabel className="nav-form-text">Verify your password</ControlLabel> 
                        <Col sm={10}>
                            <FormControl 
                            type="password" 
                            onChange={this._setPasswordAgain}
                            placeholder="Verify your password" />
                        </Col>
                    </FormGroup>
                    <FormGroup> 
                        <Col sm={10}>
                            <Button className="btn btn-success" type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}