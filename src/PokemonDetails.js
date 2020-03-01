import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <section className="pokemon-card">
        <div className="name">{pokemon.name}</div>
        <div><span role="img" aria-label="height">📏</span>: {pokemon.height}</div>
        <div><span role="img" aria-label="weight">⚖</span>: {pokemon.weight}</div>
        <div>{pokemon.types}</div>
      </section>
    </div>
  )
}

export default PokemonDetails;
