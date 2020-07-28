import React from 'react';
import Board from '../Components/Board/Board';
// import Room from '../Components/RoomCard/RoomCard';

import './App.scss';

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">INSERT KNIFE</button>
      <Board />
    </div>
  );
}

export default App;
