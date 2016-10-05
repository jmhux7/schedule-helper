import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button, Icon, Card, Row, Col, Input, CardPanel } from 'react-materialize';

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
            <img className="hero-image" src="https://hd.unsplash.com/photo-1435527173128-983b87201f4d"/>
            <div className="hero-hue"></div>
                <div className="center-align">
                    <h3>Welcome to the Schedule Helper</h3>
                    <Col className="center-align" l={4} m={4} s={10} offset="l4" offset="m4">
                        <CardPanel className="cyan lighten-3 black-text" offset="l4" offset="m4">
                            <Row>
                                <form onSubmit={this._handleSubmit}>
                                    <Input 
                                        type="email" 
                                        ref="email" 
                                        label="Email"
                                        value={this.state.email}
                                        ref={(input) => this._email = input}
                                        s={12} />
                                    <Input 
                                        type="password" 
                                        ref="password" 
                                        label="Password"
                                        value={this.state.password}
                                        ref={(input) => this._password = password}
                                        s={12} />
                                    <Button 
                                        className="cyan darken-2" 
                                        type ="submit" 
                                        node='a' 
                                        waves='light'>
                                        Submit
                                        <Icon 
                                            right>
                                            file_cloud</Icon>
                                    </Button>
                                </form>
                            </Row>
                        </CardPanel>
                    </Col>
                </div>
            </div>
        )
    }   
}

