import { useState } from 'react';
import '../css/MasterBall.css';

interface MasterBallProps {
  count: number;
}

const MasterBall: React.FC<MasterBallProps> = ({ count }) => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  const toggleShowCount = () => {
    setToggleState(currentToggleState => !currentToggleState);
  };

  return (
    <div>
      <div className='masterBallContainer'>
        <img className='masterBall' onClick={toggleShowCount} src="../src/assets/masterball.png" alt="pokeball" width="200" />
      </div>

      {!toggleState && <p className='clickMe'>Cliquez sur la MasterBall !</p>}
      {toggleState && <div className='nbrDiv'>Il y a {count} pokémons enregistrés dans le Pokedex !</div>}
    </div>
  );
};

export default MasterBall;
