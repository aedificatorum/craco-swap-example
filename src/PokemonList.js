import React from "react";

const PokemonList = ({ pokemon, selectPokemon }) => {
  return (
    <div>
      <h2>Select your pokemon...</h2>
      <ul>
        {pokemon.map(p => {
          return <li key={p.name}>{p.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
