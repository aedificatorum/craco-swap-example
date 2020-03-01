import React from 'react';
import './App.css';
import {
  getAllPokemon,
  getPokemon
} from './Store';

function App() {
  return (
   <div><button onClick={async () => alert(await getAllPokemon())}>get pokemon</button></div>
  );
}

export default App;
