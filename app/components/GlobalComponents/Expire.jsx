import React, { Image, Component } from 'react';
import Loading from 'react-loading';

export default class Expire extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this.setTimer();
            this.setState({visible: true});
        }
    }
    componentDidMount() {
        this.setTimer();
    }
    setTimer() {
        this._timer != null ? clearTimeout(this._timer) : null;

        this._timer = setTimeout(function(){
            this.setState({visible: false});
            this._timer = null;
        }.bind(this), this.props.delay);
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    render() {
        return this.state.visible 
            ? <div>{this.props.children}</div>
            : <span />;
    }

}

    Expire.propTypes = {
        delay: React.PropTypes.number
    };

    Expire.defaultProps = {
        delay: 2000
    };