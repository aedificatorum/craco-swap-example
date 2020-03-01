const getAllPokemon = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
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
  const pokemon = {name: resultJson.name, types: resultJson.types.map(p => p.type.name).join(","), weight: resultJson.weight, height: resultJson.height }
  return pokemon
}

export { getAllPokemon, getPokemon };
