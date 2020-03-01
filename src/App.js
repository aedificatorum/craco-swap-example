import React, { useState, useEffect } from "react";
import "./styles/tailwind-base.css";
import "./styles/App.css";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import { getAllPokemon, getPokemon } from "./Store";

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

  const selectPokemon = async pokemonName => {
    setSelectPokemon(await getPokemon(pokemonName));
  };

  return (
    <div className="container">
      <h1>Pokebattle</h1>
      <div>
        {!pokemonList.length ? (
          <Loading />
        ) : (
          <PokemonList pokemon={pokemonList} selectPokemon={selectPokemon} />
        )}
      </div>
      <div className="pokemonCardContainer">
        {selectedPokemon !== null && (
          <div>
            <PokemonDetails pokemon={selectedPokemon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
