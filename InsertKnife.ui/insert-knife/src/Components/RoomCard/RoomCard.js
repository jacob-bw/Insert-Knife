import React from 'react';
import RoomCardDoors from './RoomCardDoors';

class RoomCard extends React.Component {
  
  props = this.state;



  render(){
    const { room } = this.props;
    console.log(room)
    return (
      <div className="card text-center col-md-3" id={room.roomId}>
        <RoomCardDoors />
        {/* <div className="card-header">
          <ul className="nav nav-pills card-header-pills justify-content-center">
            <li className="nav-item">
              <a className="nav-link disabled" href="#"><i class="fas fa-door-open"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"><i class="fas fa-door-closed"></i></a>
            </li>
          </ul> 
        </div> */}
        
        <div className="card-body">
          <h4 className="card-title">{ room.roomName }</h4>
          <p className="card-text">
            {/* <i class="fas fa-user"></i> */}
            
            { !this.props.occupied
              ? <i className="fas fa-user"></i> 
              : <div className="fas fa-user"></div> 
            }
          </p>
        </div>
      </div>
    )
  }
}

export default RoomCard;
