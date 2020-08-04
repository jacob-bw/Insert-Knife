import React from 'react';
import {getAllWeapons, getAllSuspects} from '../../Helpers/Data/GuessData';
import { getCurrentGame } from '../../Helpers/Data/GameData';


class GuessTable extends React.Component {
  
  // does it make sense to add "currentGame" to state for comparison?
  


  props = this.state;

  
  // checkAccuracy = () => {
  //   if (target.id !== answerId ){
  //     addclass = "wrongo"
  //   } else {
  //     addclass = "yougotitdude";
  //   }
  // }


  // QUESTIONS FOR HELP W/ JISIE
  // 1) what am I formatting wrong w/ these functions to not get current game?
  // 2) what am I formatting wrong in my api call to not snag those names?
  // 3) I need help comparing the old guesses to the current "answer" within the game


  render() {

    const { guess } = this.props
    console.log(guess);
    return(
    <tr>
      <td id={guess.weaponId}>{guess.weaponName}</td>
    <td id={guess.roomId}>{guess.roomName}</td>
    <td id={guess.suspectId}>{guess.suspectName}</td>
    </tr>
    )
  }

}

export default GuessTable;
