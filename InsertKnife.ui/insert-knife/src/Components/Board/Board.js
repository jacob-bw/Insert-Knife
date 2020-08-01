import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import {getAllRooms} from '../../Helpers/Data/RoomData';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
  }

  getCardId = (e) => {
    const newCardId = e.target.id;
    console.log(newCardId);
  }

  buildRooms = () => {
    getAllRooms()
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }


  componentDidMount() {
    const { room } = this.props;
    this.buildRooms();
  }

  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} buildRooms={this.buildRooms}/>)
    
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