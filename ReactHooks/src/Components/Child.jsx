import React, { forwardRef, useImperativeHandle } from 'react'

const Child  = forwardRef ((props,ref)=>{

  function childfunction(){
    console.log("child function");
  }
useImperativeHandle(ref,()=>(
  {
    childfunction
  }
))

  return(
    <>
    <div>
       <div  style={{background:'red',width:'100px',height:'100px'}} onClick={props.handleClick}>

</div>
    </div>
    </>
  )
})

export default Child
