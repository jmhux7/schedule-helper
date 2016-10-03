import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Icon } from 'react-materialize';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>Boilerplate app!</h1>
        <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
      </div>
    )
  }

}
