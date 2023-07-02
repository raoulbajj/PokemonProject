import React from 'react';
import Pokemon from '../models/pokemon';
import '../css/PokemonCard.css';
import { useTypeColor } from '../hooks/typeColor';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const typeColors = pokemon.types.map(type => useTypeColor(type));

  return (
    <div className="pokemonCard">
      <p className='pokemonName'>{pokemon.name.toUpperCase()}</p>
      <img className='pokemonPicture' src={pokemon.picture} alt={pokemon.name} width='210' height='210' />

      <div className='types-container'>
        {pokemon.types.map((type, color) => {
          return (
            <p className={pokemon.types.length < 2 ? 'monoType' : 'duoType'}
              key={color}
              style={{ backgroundColor: typeColors[color] }}>
              {type}
            </p>
          )
        })}
      </div>
    </div>
  );
};

export default PokemonCard;