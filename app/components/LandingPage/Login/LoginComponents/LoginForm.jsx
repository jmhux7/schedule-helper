import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';

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
            <div className="landing-container">
                <h3>Welcome to the Schedule Helper</h3>
                <Col className="login-container">
                    <CardPanel className="teal lighten-4 black-text">
                        <h6>Please Log In</h6>
                        <form onSubmit={this._handleSubmit}>
                            <Input 
                                label="Email" 
                                type="email"
                                onChange={this._setEmail} 
                                />                 
                            <Input
                                label="Password"
                                type="password"
                                onChange={this._setPassword}
                                />
                            <Button waves="light" type ="submit">Submit</Button>                   
                        </form>
                        <a href="/#/signup" className="new-account">Create an account!</a>
                    </CardPanel>
                </Col>
            </div>
        )
    }   
}

