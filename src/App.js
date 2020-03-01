import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import { getAllPokemon } from "./Store";

const Loading = () => {
  return <div>Loading...</div>;
};

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectPokemon] = useState(null);

  useEffect(() => {
    const getPokemonAsync = async () => {
      setPokemonList(await getAllPokemon());
    };
    getPokemonAsync();
  }, []);

  const selectPokemon = async(pokemonName) => {
    alert(`${pokemonName} I choose you!`);
    // call the API for a single pokemon
    // store pokemon details in state
  } 

  return (
    <div>
      <h1>Pokebattle</h1>
      <div>
        {!pokemonList.length ? (
          <Loading />
        ) : (
          <PokemonList pokemon={pokemonList} selectPokemon={selectPokemon} />
        )}
      </div>
      {selectedPokemon !== null && <div>
        <PokemonDetails pokemon={selectedPokemon} />
      </div>}
    </div>
  );
}

export default App;
