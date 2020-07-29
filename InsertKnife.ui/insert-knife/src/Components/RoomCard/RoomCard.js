import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'

class RoomCard extends React.Component {
  
  props = this.state;

  render(){
    const { room } = this.props;
    console.log(room)
    return (
      <div className="card text-center" id={room.roomId}>
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">User Present</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">User Not In Room</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h4 className="card-title">{ room.roomName }</h4>
          <p className="card-text">
            <FontAwesomeIcon id='userIcon' icon={fas}/>
          </p>
        </div>
      </div>
    )
  }
}

export default RoomCard;
