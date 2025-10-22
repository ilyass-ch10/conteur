import React, { useState } from 'react';

const ComposantState = () => {
  const [state, setState] = useState({
    x: 'bienvenu visiteur',
    y: 'Inscription'
  });

  const changer = () => {
    setState({
      x: 'Inscription reussi',
      y: 'merci'
    });
  };

  return (
    <>
      <h1>{state.x}</h1>
      <button onClick={changer}>{state.y}</button>
    </>
  );
};

export default ComposantState;