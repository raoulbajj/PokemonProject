import Pokemon from './models/pokemon';
import PokemonCard from './components/PokemonCard';
import MasterBall from './components/MasterBall';
import usePokemons from './hooks/usePokemons';
import Test from './components/Test';
import './css/App.css';
import Title from './components/Title';

function App() {

  const pokemons: Pokemon[] = usePokemons();

  return (
    <>
      <Title />

      {/* <Test count={42} /> */}

      <MasterBall count={pokemons.length} />

      <div className="cardsContainer">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>


    </>
  )
};

export default App;