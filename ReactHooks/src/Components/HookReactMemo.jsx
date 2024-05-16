import React, { useCallback, useMemo, useState } from 'react'
import Justinfo from './Justinfo'

const HookReactMemo = () => {
       const [count,setCount] = useState(0)
       // const obj  = useMemo(()=>{
       //        return {
       //               name:'vijay',
       //               count
       //        }
       // },[count])

       const obj  = useCallback(()=>{
              return () =>{
                     console.log('hello from usecallbck');
              }
       },[])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <Justinfo obj={obj} />
    </div>
  )
}

export default HookReactMemo
