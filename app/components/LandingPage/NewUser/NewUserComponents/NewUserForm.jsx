import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';

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
            <Col className="new-user-container">
                <CardPanel className="light-blue lighten-4 black-text">
                    <h3>Create an account</h3>
                        <form onSubmit={this._handleSubmit}>                    
                            <Input 
                                type="text" 
                                onChange={this._setFirstName} 
                                label="First Name"
                                />                  
                            <Input 
                                type="text" 
                                onChange={this._setLastName} 
                                label="Last Name"
                                />
                            <Input 
                                type="email" 
                                onChange={this._setEmail} 
                                label="Email" 
                                />
                            <Input
                                type="checkbox"
                                label="Are you the schedule administrator?"
                                onClick={this._setIsAdmin}
                                />
                            <Input
                                type="number"
                                max="999"
                                label="If you are the admin, what is your code?"
                                onChange={this._setAdminKey}
                                />
                            <Input 
                                type="password"
                                onChange={this._setPassword}
                                label="Password" 
                                />
                            <Input 
                                type="password" 
                                onChange={this._setPasswordAgain}
                                label="Verify your password" />                    
                            <Button className="light-blue darken-4" type="submit">Submit</Button>                    
                        </form>
                    </CardPanel>
                </Col>
        )
    }
}