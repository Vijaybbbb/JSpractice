import React, { useContext } from 'react';
import { contextnew }  from '../Components/HookReducer';

const HookUseState = () => {
  console.log(useContext(contextnew));

  return (
    <>
     
      <button onClick={() => {
        dispatch({ type: 'inc' });
      }}>+</button>
      <button onClick={() => {
        dispatch({ type: 'dec' });
      }}>-</button>
    </>
  );
};

export default HookUseState;
