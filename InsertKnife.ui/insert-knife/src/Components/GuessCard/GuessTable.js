import React from 'react';
import {getAllWeapons, getAllSuspects} from '../../Helpers/Data/GuessData';

class GuessTable extends React.Component {
  
  props = this.state;

  fafoWeaponIdTranslator = (guess) => {
    if (guess.weaponId === 1) {
      return("Knife")
    } else if (guess.weaponId === 2) {
      return("oops it's a gun")
    }
  };

  getAllSuspects();
  getAllWeapons();

  // checkAccuracy = () => {
  //   if (targetId === false ){
  //     addclass = "wrongo"
  //   } else {
  //     console.log("beepboop");
  //   }
  // }
  

  // how to create a function that matches the id with the name

  render() {

    const { guess } = this.props

    console.log("this is a guess before entering the guess table", guess);
    return(
    <tr>
      <td>{guess.weaponId}</td>
      <td>{guess.suspectId}</td>
      <td>{guess.roomId}</td>
    </tr>
    )
  }

}

export default GuessTable;
