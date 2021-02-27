import React from "react";
import propTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
    <div className="pokemon">
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`Average weight:
        ${ averageWeight.value }
        ${averageWeight.measurementUnit}`}
        </p>
        <img src={ image } alt={`${name} sprite`}/>
      </div>
    </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    type: propTypes.string,
    averageWeight: propTypes.shape({
      measurementUnit: propTypes.string,
      value: propTypes.number,
    })
  }).isRequired,
}

export default Pokemon;