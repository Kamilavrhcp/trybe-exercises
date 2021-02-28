import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight: { value, measurementUnit }, image } = pokemon;
    return (
    <section className="card">
      <div className="pokemon">
        <p>{ name }</p>
        <p>{ type }</p>
        <p> Average Weigth: { value } { measurementUnit} </p>
        <img src={ image } alt={ name} />
      </div>
    </section>
    );
  }
}

export default Pokemon;