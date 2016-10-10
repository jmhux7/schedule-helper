import React, { Component } from 'react';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel } from 'react-materialize';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import TeacherScheduleBasket from './TeacherScheduleBasket';
import TimePickerElement from './TimePickerElement';

export default class CreateTeacherSchedule extends Component {
    constructor () {
        super();
        this.state = {
            _scheduleBasket: [],
            _numChildren: 0
        }
        this._addAfterBefore = this._addAfterBefore.bind(this);
    }

    _addAfterBefore(e) {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
        console.log("After and Before init")
    }

    _handleSubmit(e){
        e.preventDefault();
        const scheduleBasket = this.state._scheduleBasket

        console.log(scheduleBasket)
        this.props.assignSchedule(scheduleBasket);
    }

    render () {

        const childrenClocks = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            childrenClocks.push(<TimePickerElement />);
        };

        // return (
        //     <ParentComponent addChild={this.onAddChild.bind(this)}>
        //         {childrenClocks}
        //     </ParentComponent>
        // );





        return (            
            <Col className="new-user-container">
                <CardPanel className="light-blue lighten-4 black-text">
                    <h3>Set the schedule</h3>
                    <form className="teacher-times" onSubmit={this._handleSubmit}>
                        <p className="time-label">Available after:</p>
                        <TimePicker />
                        <p className="time-label">And before:</p>
                        <TimePicker />
                        <TimePickerElement clockItems={this.state.childrenClocks} />
                    </form>
                    <Button onClick={this._addAfterBefore}>Add availability window</Button>
                </CardPanel>
            </Col>
        )
    }
}

//     constructor () {
//         this.state = {
//             numChildren: 0
//         };
//     }

//     render () {
//         const children = [];

//         for (var i = 0; i < this.state.numChildren; i += 1) {
//             children.push(<ChildComponent number={i} />);
//         };

//         return (
//             <ParentComponent addChild={this.onAddChild.bind(this)}>
//                 {children}
//             </ParentComponent>
//         );
//     }

//     onAddChild () {
//         this.setState({
//             numChildren: this.state.numChildren + 1
//         });
//     }
// }

// class ParentComponent extends React.Component {
//     render () {
//         <div className="card calculator">
//             <p><a href="#" onClick={this.props.addChild}>Add Another Child Component</a></p>
//             <div id="children-pane">
//               {this.props.children}
//             </div>
//         </div>
//     }