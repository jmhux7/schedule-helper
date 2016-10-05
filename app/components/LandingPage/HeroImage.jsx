import React, { Image, Component } from 'react';
import ReactDOM from 'react-dom';

export default class HeroImage extends Component {
    render() {
        return(
            <div>
                <img className="hero-image" src={"https://hd.unsplash.com/photo-1435527173128-983b87201f4d"} />
                <div className="hero-hue"></div>
            </div>
        )
    }
}