const getAllPokemon = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
  const resultJson = await result.json();
  const allPokemon = resultJson.results;
  const pokemon = allPokemon.map(pokemon => {
    return { name: pokemon.name };
  });
  return pokemon;
};

export { getAllPokemon };
