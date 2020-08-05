import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import GuessCard from '../GuessCard/GuessCard';
import GuessTable from '../GuessCard/GuessTable';

import {Table} from 'reactstrap';
import { getAllRooms } from '../../Helpers/Data/RoomData';
import { getOldGuesses, checkLastGuess } from '../../Helpers/Data/GuessData';
import { getCurrentGame } from '../../Helpers/Data/GameData';

import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
    getOldGuesses: [],
    newGuess: {
      murderWeapon: '',
      murderSuspect: ''
    },
    currentGame: {
      solutionRoom: '',
      solutionWeapon: '',
      solutionSuspect: ''
    },
    solved: false,
  }


  // first set the solutions in state
  // second check guess values against solution
  // lastly highlight correct answers
  // && print "YOU WON" if all 3 params match

  setUpGame = () => {
    getCurrentGame()
    .then(getCurrentGame => this.setState({currentGame: 
      {
        solutionRoom: getCurrentGame.answerRoomId, 
        solutionWeapon: getCurrentGame.answerWeaponId, 
        solutionSuspect: getCurrentGame.answerSuspectId
      } 
    }))
  }

  
  buildRooms = () => {
    getAllRooms()
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  buildTable = () => {
    getOldGuesses()
    .then(getOldGuesses => this.setState({ getOldGuesses: getOldGuesses }))
  }

  checkGuess = () => {
    checkLastGuess()
    .then(checkLastGuess => this.setState({solved: checkLastGuess}))
  }

  componentDidMount() {
    this.buildRooms();
    this.buildTable();
    this.setUpGame();
  }

  render() {
    const { getAllRooms, getOldGuesses } = this.state;

    const BuildGameBoard = getAllRooms.map((room) => <RoomCard key={room.id} room={room} buildRooms={this.buildRooms}/>)
    
    const buildGuessTable = getOldGuesses.map((guess) => <GuessTable key={guess.id} guess={guess} currentGame={this.state.currentGame}/>)

    return (
      <div>
        <div className="gameBoard container">
          <div className="row">
            {BuildGameBoard}
            <GuessCard buildTable={this.buildTable}  solved={this.state.solved}/>
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