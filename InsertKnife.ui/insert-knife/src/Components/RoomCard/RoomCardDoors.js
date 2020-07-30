import React from 'react';

class RoomCardDoors extends React.Component {
  
  props = this.state;



  render(){
    const { room } = this.props;
    console.log(room)
    return (
        <div>
        { !this.props.occupied
          ? <a className="nav-link disabled" href="#"><i class="fas fa-door-closed"></i></a>
          : <a className="nav-link disabled" href="#"><i class="fas fa-door-open"></i></a>
        }
        </div>
    )
  }
}

export default RoomCardDoors;
