import React from 'react';
import data from './data';
import Pokedex from './Pokedex';

  class PokedexList extends React.Component {
    render() {
      return (
        <div>
          {data.map((pokemon, index) => <Pokedex pokemon ={pokemon} key={index}/>)}
        </div>
      )
    }
  }







export default PokedexList;
