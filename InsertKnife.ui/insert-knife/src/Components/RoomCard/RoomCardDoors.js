import React from 'react';

class RoomCardDoors extends React.Component {
  
  props = this.state;



  render(){

    return (
        <div>
        { !this.props
          ? <a className="nav-link disabled" href="#"><i className="fas fa-door-closed"></i></a>
          : <a className="nav-link disabled" href="#"><i className="fas fa-door-open"></i></a>
        }
        </div>
    )
  }
}

export default RoomCardDoors;
