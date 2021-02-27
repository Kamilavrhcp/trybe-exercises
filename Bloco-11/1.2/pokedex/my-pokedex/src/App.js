import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <h1 className='title'>POKEDEX</h1>
      <Pokedex  pokemons={pokemons}/>
    </div>
  );
}

export default App;
