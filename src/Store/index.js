const getAllPokemon = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
  const resultJson = await result.json();
  const allPokemon = resultJson.results;
  const pokemon = allPokemon.map(pokemon => {
    return { name: pokemon.name };
  });
  return pokemon;
};

const getPokemon = async (name) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const resultJson = await result.json();
  const pokemon = {name: resultJson.name, type: resultJson.types.map(p => p.type.name), weight: resultJson.weight }
  return pokemon
}

export { getAllPokemon, getPokemon };
