import React from 'react';
import Board from '../Components/Board/Board';
import ControlBar from '../Components/Controls/ControlBar';

import './App.scss';

function App() {
  return (
    // "if !currentGame.Any display start game button"
    <div className="App">
      {/* <div id="NewGame">Want to start a new game? Go ahead and ... [this does not work
      <button className="btn btn-danger startNewGame">INSERT KNIFE</button>
      </div> */}
      <Board />
      {/* <ControlBar /> */}
    </div>
  );
}

export default App;
