import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HandleLogin from './HandleLogin'

export default class LoginForm extends Component {

    constructor () {
        super()
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit(e){
        e.preventDefault()
        const email = this._email.value;
        const password = this._password.value
        this.props.login(email, password)
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Schedule Helper</h3>
                <form onSubmit={this._handleSubmit}>
                    <input 
                        type="email" 
                        ref="email" 
                        label="Email"
                        ref={(input) => this._email = input} />
                    <input
                        type="password" 
                        ref="password" 
                        label="Password"
                        ref={(input) => this._password = input} />
                    <button type ="submit">Submit</button>
                </form>
                       
            </div>
        )
    }   
}

