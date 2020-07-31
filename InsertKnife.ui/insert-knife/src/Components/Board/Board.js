import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import roomData from '../../Helpers/Data/RoomData';
import gameData from '../../Helpers/Data/GameData';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
    currentRoom: ''
  }


  // MoveToNewRoom function
  // if click on a new room, simply insert new roomId into game table on current game line
  // if click "move forward" simply iterate the user into the next room 

  moveToNewRoom = (newRoomId) => {
    const currentRoom = gameData.getCurrentRoom;
  }

  // getCardId = (e) => {
  //   const newCardId = e.target.id;
  //   console.log(newCardId);
  // }

  componentDidMount() {
    const { room } = this.props;
    roomData.getAllRooms(room)
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }
 


  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} />)
    
    return (
      <div>
        <div className="gameBoard container">
          <div className="row">{BuildGameBoard}</div>
        </div>
      </div>
    )
  }
}

export default Gameboard;