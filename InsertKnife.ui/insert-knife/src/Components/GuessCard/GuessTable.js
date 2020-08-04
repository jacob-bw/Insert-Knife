import React from 'react';


class GuessTable extends React.Component {
  
  props = this.state;


  buildGuessTable = () => {

  }

  // checkAccuracy = () => {
  //   if (targetId === false ){
  //     addclass = " text-decoration-line: line-through"
  //   } else {
  //     console.log("beepboop");
  //   }
  // }

  render() {

    const { guess } = this.props
    return(
    <tr>
    <th scope="row" id={guess}>{guess.guessId}</th>
      <td>{guess.guessId} </td>
      <td>{guess.suspectId}</td>
      <td>{guess.roomId}</td>
    </tr>
    )
  }

}

export default GuessTable;
