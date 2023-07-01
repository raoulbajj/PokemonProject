import React from 'react';

interface PokemonCountProps {
  count: number;
  show: boolean;
}

const PokemonCount: React.FC<PokemonCountProps> = ({ count, show }) => {
  if (!show) {
    return <p className='clickMe'>Cliquez sur la MasterBall !</p>
  }

  return <div className='nbrDiv'>Il y a {count} pokémons enregistrés dans le Pokedex !</div>;
};

export default PokemonCount;