import React from 'react';

class Pokedex extends React.Component {
  render() {
    const {id, name, type, averageWeight, image, moreInfo} = this.props.pokemon
    return <p> <ul>
      {id} {name} {type} {averageWeight} {image} {moreInfo}
      </ul></p>
  }
}

export default Pokedex;