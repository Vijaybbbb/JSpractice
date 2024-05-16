import React, { createContext, useReducer, useState } from 'react';

export const contextnew = createContext();

const reducer = (state, action) => {
      
  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default: return state;
  }
};

  const HookReducer = ({ children }) => {
  const [initial]  = useState(0)
  const [state, dispatch] = useReducer(reducer, initial);

  return (
//     <context.Provider value = {{ initial, dispatch }}>
//       {children}
//     </context.Provider>
<>
<h1>{state}</h1>
<button onClick={() => {

        dispatch({ type: 'inc' });
      }}>+</button>
      <button onClick={() => {
        dispatch({ type: 'dec' });
      }}>-</button>
</>
  );
};

export default HookReducer;
