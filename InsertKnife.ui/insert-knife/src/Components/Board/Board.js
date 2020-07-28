import React from 'react';
import RoomCard from '../RoomCard/RoomCard';

import { getAllRooms } from '../../Helpers/Data/RoomData';

class Gameboard extends React.Component{
  state = {
    getAllRooms: []
  }

  componentDidMount() {
    const { roomName } = this.props;
    getAllRooms(roomName)
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.roomId} room={room}/>)
    
    return (
      <div>
        <h1>This is the game board</h1>
        <div>{BuildGameBoard}</div>
      </div>
    )
  }
}

export default Gameboard;