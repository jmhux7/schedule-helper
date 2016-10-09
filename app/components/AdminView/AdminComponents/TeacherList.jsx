import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Col, Row, Input, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';

export default class TeacherList extends Component {

    render() {
        var teachers = this.props.allTeachers;

        return (

            console.log("the teachers are " + teachers)

            // var teachersOutput = 
            // <Col className="teacher-list">
            //     <Collection>
            //         <CollectionItem href='#'>Alvin</CollectionItem>
            //         <CollectionItem href='#' active>Alvin</CollectionItem>
            //         <CollectionItem href='#'>Alvin</CollectionItem>
            //         <CollectionItem href='#'>Alvin</CollectionItem>
            //     </Collection>    
            // </Col>
        );
    }
}

//   render () {
//     var Rambo = this.props.howdy;
//     var services = [];
//     function getServices(item) {
//       return item.product_type === "service";
//     }
//     var Lambo = Rambo.filter(getServices);

//     console.log("Rambo is: ", Rambo);
//     console.log("Lambo is: ", Lambo);

//     var Zambo = Lambo.map(function(item, i) {
//       return (
//         <tr>
//           <td>{item.name}</td>
//           <td>${item.cost}0</td>
//           <td>{item.description}</td>
//         </tr>
//       )
//     })

//     return(
//       <tbody>{Zambo}</tbody>
//     )
//   }
// }