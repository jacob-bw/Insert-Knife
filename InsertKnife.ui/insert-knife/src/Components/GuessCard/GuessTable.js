import React from 'react';

class GuessTable extends React.Component {
  
  props = this.state;

  
  // checkAccuracy = () => {
  //   if (target.id !== answerId ){
  //     addclass = "wrongo"
  //   } else {
  //     addclass = "yougotitdude";
  //   }
  // }


  // QUESTIONS FOR HELP W/ JISIE
  // I need help comparing the old guesses to the current "answer" within the game


  render() {

    const { guess } = this.props
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
