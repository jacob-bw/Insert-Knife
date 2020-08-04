import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import GuessCard from '../GuessCard/GuessCard';
import GuessTable from '../GuessCard/GuessTable';

import {Table} from 'reactstrap';
import { getAllRooms } from '../../Helpers/Data/RoomData';
import { getOldGuesses } from '../../Helpers/Data/GuessData';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
    getOldGuesses: [],
    newGuess: [],
    solved: false,
  }

  buildRooms = () => {
    getAllRooms()
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  buildTable = () => {
    console.log(getOldGuesses);
    getOldGuesses()
    .then(getOldGuesses => this.setState({ getOldGuesses: getOldGuesses }))
  }



  componentDidMount() {
    this.buildRooms();
    this.buildTable();
  }

  render() {
    const { getAllRooms, getOldGuesses } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} buildRooms={this.buildRooms}/>)
    
    const buildGuessTable = getOldGuesses.map((guess) => <GuessTable key={guess.id} guess={guess}/>)

    return (
      <div>
        <div className="gameBoard container">
          <div className="row">
            {BuildGameBoard}
            <GuessCard />
            <Table className="guessTable">
              <thead>
                <tr>
                  <th>Weapon</th>
                  <th>Room</th>
                  <th>Suspect</th>
                </tr>
              </thead>
              <tbody>
                {buildGuessTable}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

export default Gameboard;