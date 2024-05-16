import React, { createContext, useReducer } from 'react'
export const userContext = createContext()


const Hookcontext = ({ children }) => {
       const initial_state = 0


       const reducer = (state, action) => {
              switch(action){
                     case 'inc' : return state+1
                     case 'dec' : return state-1

              }
       }

       const [state, dispatch] = useReducer(reducer, initial_state)



       return (
              <>

                     <userContext.Provider value={{state,dispatch}}>
                            {children}
                     </userContext.Provider>


              </>
       )
}

export default Hookcontext
