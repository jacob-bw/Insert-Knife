import React from 'react';
import RoomCard from '../RoomCard/RoomCard';
import { getAllRooms } from '../../Helpers/Data/RoomData';
import { getAllSuspects, getAllWeapons} from '../../Helpers/Data/GuessData';
import GuessCard from '../GuessCard/GuessCard';
import { getCurrentGame } from '../../Helpers/Data/GameData';
import './Board.scss';


class Gameboard extends React.Component{
  state = {
    getAllRooms: [],
    currentGame: [],
  }

    getAnswer = () =>{
      getCurrentGame();
      console.log(getCurrentGame)
    }


  getCardId = (e) => {
    var newCardId = e.target.id;
    console.log(newCardId);
  }

  buildRooms = () => {
    getAllRooms()
    .then(getAllRooms => this.setState({getAllRooms: getAllRooms}))
  }

  // buildWeapons = () => {
  //   getAllWeapons()
  //   .then(getAllWeapons => this.setState({getAllWeapons: getAllWeapons}))
  // }

  // buildSuspects = () => {
  //   getAllSuspects()
  //   .then(getAllSuspects => this.setState({getAllSuspects: getAllSuspects}))
  // }


  componentDidMount() {
    const { room, weapon, suspect } = this.props;
    this.buildRooms();
  }

  // get help w/ layout

  // build first half of gameboard w/ rooms 1-4, 
  // then build guess component,
  // then build 2nd half of gameboard w/ rooms 5-8

  render() {
    const { getAllRooms, getAllSuspects, getAllWeapons } = this.state;

//    const stateAllSuspects = getAllSuspects.map((suspect) => <DropdownItem key={suspect.id} onClick={this.suspectPicker}>{suspect.SuspectName}</DropdownItem>)
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