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

class GuessCard extends React.Component {

saveGame = () =>{
  console.log("placeholder for save event");
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
              <DropdownItem id="1">Ms Scarlett</DropdownItem>
              <DropdownItem id="2">Mr Green</DropdownItem>
              <DropdownItem id="3">Mr White</DropdownItem>
              <DropdownItem id="4">Ms Peacock</DropdownItem>
              <DropdownItem id="5">Col Mustard</DropdownItem>
              <DropdownItem id="6">Prof Plum</DropdownItem>
              <DropdownItem id="7">Yvette</DropdownItem>
              <DropdownItem id="8">Wadsworth</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="weaponMenu"  size="sm">
            <DropdownToggle caret>
              Select Weapon
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="1">Knife</DropdownItem>
              <DropdownItem id="2">Pipe</DropdownItem>
              <DropdownItem id="3">Pistol</DropdownItem>
              <DropdownItem id="4">Candlestick</DropdownItem>
              <DropdownItem id="5">Rope</DropdownItem>
              <DropdownItem id="6">Wrench</DropdownItem>
              <DropdownItem id="7">Rattlesnake</DropdownItem>
              <DropdownItem id="8">Scorpion</DropdownItem>
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
