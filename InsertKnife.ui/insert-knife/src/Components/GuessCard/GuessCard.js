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
import { makeNewGuess } from '../../Helpers/Data/GuessData';

class GuessCard extends React.Component {

  props = this.state;

  saveGame = () =>{
    console.log("placeholder for saveGame event");
  }

  weaponPicker = (e) => {
    var murderWeapon = e.target.id;
    console.log(murderWeapon);
  }

  suspectPicker = (e) => {
    var allegedMurderer = e.target.id;
    console.log(allegedMurderer);
    return(allegedMurderer);
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
            <DropdownMenu>
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
          <Button color="success" size="sm" id="makeGuess">Figure It Out</Button>
          <Button color="primary" size="sm" id="saveGame" onClick={this.saveGame}>Save Game</Button>
        </CardBody>
      </Card>
    )
  }
}

export default GuessCard;
