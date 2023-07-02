import React from 'react';
import '../css/Title.css';

export const Title: React.FC = () => (

<div className="title">
<img className='pokeballImg' src="../src/assets/pokeball.png" alt="Pokedex" width='100' />
<p className='mainTxt'>Pokedex</p>
<img className="pokeballImg" src="../src/assets/pokeball.png" alt="Pokedex" width='100' />
</div>

);

export default Title;