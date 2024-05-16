import React, { useState } from 'react'

const Hookstate = () => {
       const [state,setState] = useState(0)



  return (   
    <div>
       <h1>{state}</h1>
      <button onClick={()=>{
              setState(prev=>prev+1)
      }}>+</button>
     <button onClick={()=>{
              setState(state - 1) 
       
      }}>-</button>
    </div>
  )
}

export default Hookstate
