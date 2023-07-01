// App.tsx
import { useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonCard from './components/PokemonCard';
import PokemonCount from './components/PokemonCount';
import './css/App.css';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [showCount, setShowCount] = useState<boolean>(false);

  const showPokemonsCount = () => {
    setShowCount(!showCount);
    console.log('ShowCount = ' + (!showCount).toString().toUpperCase());
  }

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <>
      <div className="title">
        <img src="../src/assets/pokeball.png" alt="Pokedex" width='100' />
        <p className='mainTxt'>Pokedex</p>
        <img className="revert" src="../src/assets/pokeball.png" alt="Pokedex" width='100' />
      </div>

      <div className='masterBallContainer'>
        <img className='masterBall' onClick={showPokemonsCount} src="../src/assets/masterball.png" alt="pokeball" width="200" />
      </div>

      <PokemonCount count={pokemons.length} show={showCount} />

      <div className="cardsContainer">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
};

export default App;
