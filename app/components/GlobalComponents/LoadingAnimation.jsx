import React, { Image, Component } from 'react';
import Loading from 'react-loading';
import Expire from './Expire';

export default class LoadingAnimation extends Component {

  render() {
    return (
        <div>        
            <Expire delay={3500}>
                <div className="loading-overlay">
                    <div className="spinner">
                        <Loading type='spinningBubbles' color='white' />
                    </div>
                </div>
            </Expire>
        </div>
    );
  }
}