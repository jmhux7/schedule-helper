import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Navbar, NavItem } from 'react-materialize';

export default class LandingNav extends Component {

    render() {
        return (
            <Navbar className="nav-main light-blue darken-4" brand="Rapid Schedule" right>
                <NavItem href='#'>About</NavItem>
            </Navbar>
        )   

    }

}