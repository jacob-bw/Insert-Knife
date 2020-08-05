import React from 'react';

class GuessTable extends React.Component {


  // letTheMysteryBe = () => {
  //   var guess  = this.props;
  //   if ( 
  //     guess.weaponId == currentGame.solutionWeapon &&
  //     guess.roomId == currentGame.solutionRoom &&
  //     guess.suspectId == currentGame.solutionSuspect
  //     ) {
  //       this.setState({ solved: true});
  //       console.log("case closed, ya solved it")
  //     } else {
  //       console.log("Way to go, Fart Detective. Try again.")
  //     }
  // }


  render() {

    const { guess, currentGame } = this.props;


    return(
    <tr>
      <td id={guess.weaponId} className={ guess.weaponId === currentGame.solutionWeapon ? "checked" : "wrecked"}>{guess.weaponName}</td>
      <td id={guess.roomId} className={ guess.roomId === currentGame.solutionRoom ? "checked" : "wrecked"}>{guess.roomName}</td>
      <td id={guess.suspectId} className={ guess.suspectId === currentGame.solutionSuspect ? "checked" : "wrecked"}>{guess.suspectName}</td>
    </tr>
    )
  }

}

export default GuessTable;
