import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
       const [width,setWidth] = useState(window.innerWidth)

       useEffect(()=>{
              window.addEventListener('resize',()=>{
                     setWidth(window.innerWidth)
              })
       },[width])

  return (
    <>
     <h1>width:{width}</h1>
    </>
  )
}

export default HookUseEffect
