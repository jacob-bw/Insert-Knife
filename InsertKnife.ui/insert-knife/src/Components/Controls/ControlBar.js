import React from 'react';
import Guess from '../Controls/Guess';
import { Button, Navbar, } from 'reactstrap';
import { getCurrentRoom } from '../../Helpers/Data/GameData';
import { moveRooms } from '../../Helpers/Data/RoomData';
import { getAllSuspects, getAllWeapons} from '../../Helpers/Data/GuessData';


import './controls.scss';


class ControlBar extends React.Component {

    // move arrows should just check the "currentRoomId" from the current game
  // then simple +1 to the currentRoomId and re-insert it into the table
  
  // moveToNewRoom = (e) => {
  //   let currentRoom = getCurrentRoom.data;
  //   const newCardId = e.target.id;
  //   // sets up if statement for moving forwards or backwards
  //   if (newCardId === "moveBackwards" ){
  //     // set new room to currentRoom.value - 1
  //     let newCardId = currentRoom - 1;
  //     moveRooms(newCardId).then(this.props.buildRooms);
  //   }
  //   else if (newCardId === "moveForwards") {
  //     // set new room to currentRoom.value + 1
  //     let newCardId = currentRoom + 1;
  //     moveRooms(newCardId).then(this.props.buildRooms);
  //   } else {
  //     moveRooms(newCardId).then(this.props.buildRooms);
  //   }
  //   // move to new room with the newCardId as above
  // }



  render(){
  return (
    <div>
      <Navbar color="dark" light expand="md">
        {/* <Button color="secondary" size="" id="moveBackwards" onClick={this.moveArrows}>Move Backward</Button>
        <Button color="secondary" size=""id="moveForwards" onClick={this.moveArrows}>Move Forward</Button> */}
        <Button color="success" size="" id="makeGuess">Figure it Out</Button>
        <Button color="primary">Save Game</Button>
        <Guess />
      </Navbar>
    </div>
  );
  }
}

export default ControlBar;
