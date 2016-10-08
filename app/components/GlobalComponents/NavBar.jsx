import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Navbar, NavItem } from 'react-materialize';

export default class NavBar extends Component {

    render() {
        return (
            <Navbar className="light-blue darken-4" brand='logo' right>
                <NavItem href='/'>Log In</NavItem>
                <NavItem href='#'>About</NavItem>
            </Navbar>
        )
    

    }

}