import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./PokemonList";
import { getAllPokemon } from "./Store";

const Loading = () => {
  return <div>Loading...</div>;
};

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemonAsync = async () => {
      setPokemonList(await getAllPokemon());
    };
    getPokemonAsync();
  }, []);

  return (
    <div>
      <h1>Pokebattle</h1>
      <div>
        {!pokemonList.length ? (
          <Loading />
        ) : (
          <PokemonList pokemon={pokemonList} />
        )}
      </div>
    </div>
  );
}

export default App;
