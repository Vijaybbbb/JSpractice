import React, { useContext } from 'react'
import { userContext } from './Hookcontext'

const HookPage = () => {

const user = useContext(userContext)
function handleClick(action){
       user.dispatch(action)
}
  return (
    <div>
       <h1>{user.state}</h1>
      <button onClick={()=>{handleClick('inc')}}>+</button>
      <button onClick={()=>{handleClick('dec')}}>-</button>


    </div>
  )
}

export default HookPage
