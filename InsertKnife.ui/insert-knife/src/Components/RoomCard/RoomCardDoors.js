import React from 'react';

class RoomCardDoors extends React.Component {
  
  props = this.state;

  

  render(){
    const { room } = this.props;
    console.log(room)
    return (
        // <div className="card-header">
        //   <ul className="nav nav-pills card-header-pills justify-content-center">
        //     <li className="nav-item">
        //       <a className="nav-link disabled" href="#"><i class="fas fa-door-open"></i></a>
        //     </li>
        //     <li className="nav-item">
        //       <a className="nav-link disabled" href="#"><i class="fas fa-door-closed"></i></a>
        //     </li>
        //   </ul>
        // </div>
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
