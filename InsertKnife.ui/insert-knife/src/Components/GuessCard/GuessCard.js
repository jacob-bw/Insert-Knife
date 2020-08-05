import React from 'react';
import {Button,
        Card, 
        CardBody, 
        CardTitle,
        DropdownItem, 
        DropdownMenu, 
        DropdownToggle, 
        UncontrolledDropdown, 
      } from 'reactstrap';
import { makeNewGuess, getOldGuesses } from '../../Helpers/Data/GuessData';
import { saveCurrentGame, startNewGame } from '../../Helpers/Data/GameData';

import './guessCard.scss';

class GuessCard extends React.Component {

  props = this.state;

  solveTheMystery = (e) => {
    e.preventDefault();
    console.log("you made a guess!");
    var weaponGuess = this.state.murderWeapon;
    var jaccuse = this.state.murderSuspect;
    makeNewGuess(weaponGuess, jaccuse)
    .then(this.props.buildTable)
    .catch((err) => console.error(err));
    
  }

  saveGame = () => {
    saveCurrentGame();
  }

  startNewGame = () => {
    startNewGame();
  }

  weaponPicker = (e) => {
    var murderWeapon = e.target.id;
    this.setState({murderWeapon: murderWeapon}); 
  }

  // sending API call correctly but not accurately defining suspect. correctly identifying weapon, though.
  suspectPicker = (e) => {
    var allegedMurderer = e.target.id;
    this.setState({murderSuspect: allegedMurderer})
  }

  render () {
    
    return(
      <Card>
        <CardBody>
          <CardTitle><h5>Solve The Murder</h5></CardTitle>
          <UncontrolledDropdown className="suspectMenu"  size="sm">
            <DropdownToggle caret>
              Select Suspect
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem id="1" onClick={this.suspectPicker}>Ms Scarlett</DropdownItem>
              <DropdownItem id="2" onClick={this.suspectPicker}>Mr Green</DropdownItem>
              <DropdownItem id="3" onClick={this.suspectPicker}>Mr White</DropdownItem>
              <DropdownItem id="4" onClick={this.suspectPicker}>Ms Peacock</DropdownItem>
              <DropdownItem id="5" onClick={this.suspectPicker}>Col Mustard</DropdownItem>
              <DropdownItem id="6" onClick={this.suspectPicker}>Prof Plum</DropdownItem>
              <DropdownItem id="7" onClick={this.suspectPicker}>Yvette</DropdownItem>
              <DropdownItem id="8" onClick={this.suspectPicker}>Wadsworth</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="weaponMenu"  size="sm">
            <DropdownToggle caret>
              Select Weapon
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="1" onClick={this.weaponPicker}>Knife</DropdownItem>
              <DropdownItem id="2" onClick={this.weaponPicker}>Pipe</DropdownItem>
              <DropdownItem id="3" onClick={this.weaponPicker}>Pistol</DropdownItem>
              <DropdownItem id="4" onClick={this.weaponPicker}>Candlestick</DropdownItem>
              <DropdownItem id="5" onClick={this.weaponPicker}>Rope</DropdownItem>
              <DropdownItem id="6" onClick={this.weaponPicker}>Wrench</DropdownItem>
              <DropdownItem id="7" onClick={this.weaponPicker}>Rattlesnake</DropdownItem>
              <DropdownItem id="8" onClick={this.weaponPicker}>Scorpion</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* On successful guess, swap "figure it out" text for "start new game" */}
          {/* { !this.props.solved
            ? <Button color="success" size="sm" id="makeGuess" onclick={this.solveTheMystery}>Figure It Out</Button>
            : <Button color="success" size="sm" id="newGame" onclick={startNewGame}>Start New Game</Button>
          } */}

          <Button color="success" size="sm" id="makeGuess" onClick={this.solveTheMystery}>Figure It Out</Button>
          <Button color="primary" size="sm" id="saveGame" onClick={this.saveGame}>Save Game</Button>
        </CardBody>
      </Card>
    )
  }
}

export default GuessCard;
