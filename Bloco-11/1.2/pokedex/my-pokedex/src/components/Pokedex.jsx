import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      position: 0,
      pokeType: '',
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon(sizePokemon) {
    this.setState(prevValue => ({
      position: (prevValue.position < sizePokemon -1) ? prevValue.position + 1 : 0
    }))
  }

  filterPokemonType(type) {
    //if (type !== ''){
      this.setState({
        position: 0,
        pokeType: type
      });
    //}
  }

  filteredPokemons(type) {
    const { pokemons } = this.props;

    if (type === '') return pokemons;
    return pokemons.filter(pokemon => pokemon.type === type);
  }

  render() {
    const { position, pokeType } = this.state;
    const filter = this.filteredPokemons(pokeType);
    // console.log(filter);

    return(
      <main>
        <div className='cards'>
          <Pokemon pokemon={ filter[position] } />
        </div>
        <div>
          <Button onClick={ () => this.nextPokemon(filter.length)} className="proximo-pokemon">Próximo Pokemon</Button>
          <Button onClick={ () => this.filterPokemonType('Fire') } className="fire">Fire</Button>
          <Button onClick={ () => this.filterPokemonType('Psychic') } className="psychic">Psychic</Button>
          <Button onClick={ () => this.filterPokemonType('Electric') } className="electric">Electric</Button>
          <Button onClick={ () => this.filterPokemonType('Bug') } className="bug">Bug</Button>
          <Button onClick={ () => this.filterPokemonType('Normal') } className="normal">Normal</Button>
          <Button onClick={ () => this.filterPokemonType('Dragon') } className="dragon">Dragon</Button>
          <Button onClick={ () => this.filterPokemonType('Poison') } className="poison">Poison</Button>
          <Button onClick={ () => this.filterPokemonType('Flying') } className="flying">Flying</Button>
          <Button onClick={ () => this.filterPokemonType('Water') } className="water">Water</Button>
          <Button onClick={ () => this.filterPokemonType('Grass') } className="grass">Grass</Button>
          <Button onClick={ () => this.filterPokemonType('Ghost') } className="ghost">Ghost</Button>
          <Button onClick={ () => this.filterPokemonType('Fighting') } className="fighting">Fighting</Button>
          <Button onClick={ () => this.filterPokemonType('Ground') } className="ground">Ground</Button>
          <Button onClick={ () => this.filterPokemonType('Rock') } className="rock">Rock</Button>
          <Button onClick={ () => this.filterPokemonType('Ice') } className="ice">Ice</Button>
          <Button onClick={ () => this.filterPokemonType('Dark') } className="dark">Dark</Button>
          <Button onClick={ () => this.filterPokemonType('Fairy') } className="fairy">Fairy</Button>
          <Button onClick={ () => this.filterPokemonType('') } className="all">All</Button>
        </div>
      </main>
    );
  }
}

export default Pokedex;