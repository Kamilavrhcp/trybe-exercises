import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
    <div className="pokedex">
      { pokemons.map((pokemon) => <Pokemon pokemon={ pokemon }
      key={ pokemons.name} />)}
    </div>
    );
  }
}

export default Pokedex;