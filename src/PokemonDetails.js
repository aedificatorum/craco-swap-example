import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <section className="pokemon-card">
        <div className="name">{pokemon.name}</div>
        <div className="pokemon-details">
          {pokemon.type}
          {pokemon.weight}
        </div>
      </section>
    </div>
  )
}

export default PokemonDetails;
