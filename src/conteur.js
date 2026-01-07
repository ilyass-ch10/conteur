import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action';

const App = () => {
  const [step, setStep] = useState(1);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Compteur: {count}</h1>
      
      <input 
        type="number"  
        value={step} 
        onChange={e => setStep(Number(e.target.value))}
        min="1"
      />
      
      <div>
        <button onClick={() => dispatch(increment(step))}>
          +{step}
        </button>
        
        <button onClick={() => dispatch(decrement(step))}>
          -{step}
        </button>
      </div>
      
      <p>Valeur actuelle: <strong>{count}</strong></p>
    </div>
  );
};

export default App;