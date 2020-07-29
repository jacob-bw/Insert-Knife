import React from 'react';
import Board from '../Components/Board/Board';
// import Room from '../Components/RoomCard/RoomCard';

import './App.scss';

function App() {
  return (
    // "if !currentGame.Any display start game button"
    <div className="App">
      <div id="NewGame">Want to start a new game? Go ahead and ... 
      <button className="btn btn-danger startNewGame">INSERT KNIFE</button>
      </div>
      <Board />
    </div>
  );
}

export default App;
