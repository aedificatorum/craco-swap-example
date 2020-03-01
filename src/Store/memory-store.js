const pokemon = [
  {
    name: "Charmander",
    weight: 85,
    height: 6,
    types: "Fire"
  },
  {
    name: "Bulbasaur",
    weight: 69,
    height: 7,
    types: "poison,grass"
  }
];

const getAllPokemon = async () => {
  return pokemon.map(p => {
    return { name: p.name };
  });
};

const getPokemon = async name => {
  return pokemon.find(p => name === p.name);
};

export { getAllPokemon, getPokemon };
