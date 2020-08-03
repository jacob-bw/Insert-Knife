import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import {getAllRooms} from '../../Helpers/Data/RoomData';
import GuessCard from '../GuessCard/GuessCard';
// import Guess from '../Controls/Guess';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
    // getAllWeapons: [],
    // getAllSuspects: []
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

  // get help w/ layout
  
  // build first half of gameboard w/ rooms 1-4, 
  // then build guess component,
  // then build 2nd half of gameboard w/ rooms 5-8

  render() {
    const { getAllRooms } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} buildRooms={this.buildRooms}/>)
    
    return (
      <div>
        <div className="gameBoard container">
          <div className="row">
            {BuildGameBoard}
            <GuessCard />
          </div>

          {/* <Guess /> */}
        </div>
      </div>
    )
  }
}

export default Gameboard;