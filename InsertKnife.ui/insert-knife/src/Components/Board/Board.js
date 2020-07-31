import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import { getAllRooms, moveToNewRoom } from '../../Helpers/Data/RoomData';
import { getCurrentGame } from '../../Helpers/Data/GameData';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
  }


  selectNewRoom = (getCurrentGame, newRoomId) => {
    
    moveToNewRoom(newRoomId)
      .then()
      .catch((error) => console.error('encountered the following error when attempting to update room', error));
  }

  componentDidMount() {
    const { room } = this.props;
    getAllRooms(room)
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  


  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room}/>)
    
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