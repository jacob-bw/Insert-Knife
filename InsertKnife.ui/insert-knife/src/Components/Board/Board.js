import React from 'react';
import RoomCard from '../RoomCard/RoomCard';

import './Board.scss';

import { getAllRooms } from '../../Helpers/Data/RoomData';

class Gameboard extends React.Component{
  state = {
    getAllRooms: []
  }

  // updateTattoo = (tattooId, noRegerts) => {
  //   savedData.updateTattoo(tattooId, noRegerts)
  //     .then(() => {
  //       this.getTattoos();
  //       console.log('successfully updated tattoo');
  //     })
  //     .catch((error) => console.error('error from update tattoo', error));
  // }

  selectNewRoom = (newRoomId) => {
    // mouseclick on roomcard
    // pulls id for selected roomcard
    // updates current game line on game table w/ new roomId
    // re-renders ui to print user icon and open door on roomcard
    // removes user icon and closes door from previous roomcard 
    
  }

  componentDidMount() {
    const { room } = this.props;
    getAllRooms(room)
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  


  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} occupied={room.occupied}/>)
    
    return (
      <div>
        <h1>This is the game board</h1>
        <div className="container">
          <div className="row">{BuildGameBoard}</div>
        </div>
      </div>
    )
  }
}

export default Gameboard;