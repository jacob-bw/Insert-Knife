import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Button } from 'reactstrap';
import {getAllWeapons, getAllSuspects} from '../../Helpers/Data/GuessData';


class Guess extends React.Component {
  props = this.state;

  getWeapons = () => {
    getAllWeapons()
    .then(getAllWeapons => this.setState({getAllWeapons: getAllWeapons}))
  }

  getSuspects = () => {
    getAllSuspects()
    .then(getAllSuspects => this.setState(({getSuspects: getAllSuspects})))
  }

// WHEN RESUMING WORK
// - build dropdown items using the table data for weapons and suspects

// - iterate over the table data and pull both names and IDs

// - pass selected data to the url for weapon and suspect, room and game IDs will be pulled separately

// - check guess against game 

// - print old guess w/ data color coded

// This is where you'll build the modal/popup to display previous guesses
// for the user to use as reference when attempting to make future guesses

// create a "guess mode" to activate on the controlbar when "FigureItOut" is clicked
// use same principles/processes to select

componentDidMount(){
  this.getWeapons();
  this.getSuspects();
}

render() {

  // const { getAllSuspects, getAllWeapons } = this.state;

  // const BuildWeaponMenu = getWeapons.map((weapon) => )
  return (
    <div>
        <UncontrolledDropdown className="weaponMenu">
          <DropdownToggle caret>
            Select Weapon
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="suspectMenu">
          <DropdownToggle caret>
            Select Suspect
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </div>
    )
  }
};

export default Guess;