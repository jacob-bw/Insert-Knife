import React from 'react';
import { Button, Navbar, } from 'reactstrap';
import { currentRoom } from '../../Helpers/Data/GameData';

import './controls.scss';


class ControlBar extends React.Component {



  render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Button color="secondary" size="">Move Backward</Button>
        <Button outline color="danger" size="">Solve the Mystery</Button>
        <Button color="secondary" size="">Move Forward</Button>
      </Navbar>
    </div>
  );
  }
}

export default ControlBar;
