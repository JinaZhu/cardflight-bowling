import { useState } from 'react';
import Landing from './components/Landing/Landing';
import Game from './components/Game/Game';

import {
  AppContainer
} from './styled';

function App() {
  const [startGame, setStartGame] = useState(localStorage.getItem('startGame'));

  return (
    <AppContainer>
      {startGame ? <Game/> : <Landing setStartGame={setStartGame}/> }
    </AppContainer>
  );
}

export default App;
