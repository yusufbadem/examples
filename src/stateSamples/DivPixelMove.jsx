import React, { useState } from 'react'

function DivPixelMove() {
    
    const [marginLeft, setmarginLeft] = useState(0)


    var go=()=>{

        var randomNumber=Math.floor(Math.random()*500)

        setmarginLeft(marginLeft+randomNumber)
    }
  return <>
  <button onClick={go}>Go</button>
  <div style={{width:200,height:200,backgroundColor:"black",marginLeft:marginLeft}}>
    box1
  </div>
  </>
}

export default DivPixelMove