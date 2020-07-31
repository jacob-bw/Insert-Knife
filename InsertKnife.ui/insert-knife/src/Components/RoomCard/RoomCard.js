import React from 'react';
// import RoomCardDoors from './RoomCardDoors';

class RoomCard extends React.Component {
  
  props = this.state;
  // occupied = this.state.Occupied;

  render(){
    const { room } = this.props;
    return (
      <div className="card text-center col-md-3" id={room.roomId}>
        {/* <RoomCardDoors /> */}
        { !this.props.room.occupied
          ? <a className="nav-link disabled" href="#"><i className="fas fa-door-closed"></i></a>
          : <a className="nav-link disabled" href="#"><i className="fas fa-door-open"></i></a>
        }
        <div className="card-body">
          <h4 className="card-title">{ room.roomName }</h4>
          <p className="card-text">            
            { !this.props.room.occupied
              ? <div></div> 
              : <i className="fas fa-user"></i> 
            }
          </p>
        </div>
      </div>
    )
  }
}

export default RoomCard;
