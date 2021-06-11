import { useState } from 'react';
import Landing from './components/Landing/Landing';
import Game from './components/Game/Game';

import './App.css';

function App() {
  const [startGame, setStartGame] = useState(localStorage.getItem('startGame'));

  return (
    <div className="App">
      {startGame ? <Game/> : <Landing setStartGame={setStartGame}/> }
    </div>
  );
}

export default App;
