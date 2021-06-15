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
      {/* if game state isn't set to true, then hide Game component */}
      {startGame ? <Game/> : <Landing setStartGame={setStartGame}/> }
    </AppContainer>
  );
}

export default App;
