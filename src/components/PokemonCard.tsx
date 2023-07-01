import React from 'react';
import Pokemon from '../models/pokemon';
import '../css/PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
  <div className="pokemonCard">
    <p className='pokemonName' >{pokemon.name.toUpperCase()}</p>
    <img className='pokemonPicture' src={pokemon.picture} alt="" width='210' height='210' />
    {pokemon.types.length < 1 ? <p className='pokemonType'>{pokemon.types}</p> : <div className='types-container'>{pokemon.types.map((type, index) => (<p className='pokemonType' key={index}>{type}</p>))}</div>}
  </div>
);

export default PokemonCard;
