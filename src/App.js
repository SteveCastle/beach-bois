import React from 'react';
import World from './components/World';
import Player from './components/Player';
import './App.css';

const App = () => (
  <div className="App">
    <World background="mountains.png">
      <Player
        name="corey"
        startingWeight={208}
        currentWeight={201}
        character="astronaut"
        food="icecream"
      />
      <Player
        name="richard"
        startingWeight={224}
        currentWeight={226}
        character="scientist"
      />
      <Player
        name="robert"
        startingWeight={208}
        currentWeight={200}
        character="wizard"
        food="pizza"
      />
      <Player
        name="trip"
        startingWeight={253}
        currentWeight={251}
        character="banana"
        food="chicken"
      />
      <Player
        name="stephen"
        startingWeight={233}
        currentWeight={227}
        character="gator"
        food="donut"
      />
    </World>
  </div>
);

export default App;
