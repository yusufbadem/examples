import React, { useState } from 'react'

function ChangeDivSize() {

    const [width,setWidth]=useState(200);
    const [height,setHeight]=useState(200);

    

   const changeBoxSize=()=>{
    const newWidth=Math.floor(Math.random()*1000);
    const newHeight=Math.floor(Math.random()*1000);
    setWidth(newWidth);
    setHeight(newHeight);
    console.log(newWidth,newHeight)
   }


  return <>
  <button onClick={changeBoxSize} style={{marginLeft:50}}>Random  Size Change</button>
  <hr />
  <div style={{marginLeft:50,height:height,width:width, backgroundColor:"black"}}></div>
  
  </>
    
  
}

export default ChangeDivSize