import React, { useRef, useState } from 'react'
import Child from './Child';

const HookUseImperative = () => {

const divref  = useRef()
const [color,setColor] =  useState(true)

function handleClick(){
  console.log(divref);
  // if(color){
  //   divref.current.style.background  = 'red'
  //   setColor(!color)
  // }
  // else{
   
  //     divref.current.style.background  = 'green'
  //     setColor(!color)
    
  // }
  divref.current.childfunction()
}




  return (
    <div>
     <Child ref={divref} handleClick={handleClick}/>
    </div>
  )
}

export default HookUseImperative
