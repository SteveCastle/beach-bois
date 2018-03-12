import React from 'react';
import World from './components/World';
import Player from './components/Player';
import './App.css';

const App = () => (
  <div className="App">
    <World background="garden.gif">
      <Player
        name="corey"
        startingWeight={208}
        currentWeight={208}
        character="astronaut"
        food="icecream"
      />
      <Player
        name="richard"
        startingWeight={224}
        currentWeight={224}
        character="scientist"
      />
      <Player
        name="robert"
        startingWeight={200}
        currentWeight={42}
        character="wizard"
        food="pizza"
      />
      <Player
        name="trip"
        startingWeight={253}
        currentWeight={253}
        character="banana"
        food="chicken"
      />
      <Player
        name="stephen"
        startingWeight={233}
        currentWeight={226}
        character="gator"
        food="donut"
      />
    </World>
  </div>
);

export default App;
