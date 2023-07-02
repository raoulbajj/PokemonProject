import Pokemon from './models/pokemon';
import PokemonCard from './components/PokemonCard';
import MasterBall from './components/MasterBall';
import usePokemons from './hooks/usePokemons';
import './css/App.css';
import Title from './components/Title';
import { useModal } from './hooks/useModal';
import Modal from './components/Modal';

// import Test from './components/Test';

function App() {

  const pokemons: Pokemon[] = usePokemons();
  const { isOpen, openModal, closeModal, selectedPokemon } = useModal();


  return (
    <>
      <div className="app-container">
        <Title />

        {/* <Test count={42} /> */}

        <MasterBall count={pokemons.length} />

        <div className="cardsContainer">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => openModal(pokemon)} />
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          {selectedPokemon && (
            <>
              <span className="close" onClick={closeModal}>&times;</span>
              <div>
                <h2>{selectedPokemon.name.toUpperCase()}</h2>
                <p>Type : {selectedPokemon.types.join(' / ')}</p>
                <p>Point de vie : {selectedPokemon.hp}</p>
                <p>Puissance combat : {selectedPokemon.cp}</p>
              </div>
              <img className='modalImg' src={selectedPokemon.picture} alt={selectedPokemon.name} />
            </>
          )}
        </Modal>

      </div>
    </>
  )
};

export default App;