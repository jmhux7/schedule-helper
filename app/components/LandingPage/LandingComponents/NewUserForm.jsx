import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Icon, Card, Row, Col, Input, CardPanel } from 'react-materialize';

import HandleNewUser from './HandleNewUser';


export default class NewUserForm extends Component {
    constructor () {
        super();
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit(e){
        e.preventDefault();
        const email = this._email.value
        const password = this._password.value
        const passwordAgain = this._passwordAgain.value
        const firstName = this._firstName.value
        const lastName = this._lastName.value
        console.log(email)
        if (password !== passwordAgain) {
            return alert('your passwords do not match!');
        }
        this.props.signup(email, password, firstName, lastName);
    }

    render () {
        return (
            <form className="login-form" onSubmit={this._handleSubmit}>
                <Input type="text" ref={(Input) => this._firstName = Input} label="First Name" />
                <Input type="text" ref={(Input) => this._lastName = Input} label="Last Name" />
                <Input type="email" ref={(Input) => this._email = Input} label="Email" />
                <Input type="password" ref={(Input) => this._password = Input} label="Password" />
                <Input type="password" ref={(Input) => this._passwordAgain = Input} label="Verify your password" />
                <Button type="submit">Submit</Button>
            </form>
        )
    }
}