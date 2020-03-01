import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <section className="pokemon-card">
        <div className="name">{pokemon.name}</div>
        <div>📏: {pokemon.height}</div>
        <div>⚖: {pokemon.weight}</div>
        <div>{pokemon.types}</div>
      </section>
    </div>
  )
}

export default PokemonDetails;
