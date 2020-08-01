import React from 'react';
import { moveRooms } from '../../Helpers/Data/RoomData';

class RoomCard extends React.Component {
  
  props = this.state;

  
  getCardId = (e) => {
    const newCardId = e.target.id;
    console.log(e.target.id);
  }
  
  moveToNewRoom = (e) => {
    const newCardId = e.target.id;
    moveRooms(newCardId).then(this.props.buildRooms);
  }
  
  
  render(){
    const { room } = this.props;
    return (
      <div className="card text-center col-md-3" id={room.roomId} onClick={this.moveToNewRoom} >
        { !this.props.room.occupied
          ? <a className="nav-link disabled" href="#"><i className="fas fa-door-closed"></i></a>
          : <a className="nav-link disabled" href="#"><i className="fas fa-door-open"></i></a>
        }
        <div className="card-body" id={room.roomId} >
          <h4 className="card-title" id={room.roomId} >{ room.roomName }</h4>
          <div className="card-text" id={room.roomId} >            
            { !this.props.room.occupied
              ? <div></div> 
              : <i className="fas fa-user" ></i> 
            }
          </div>
        </div>
      </div>
    )
  }
}

export default RoomCard;
