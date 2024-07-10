import React, { useState } from 'react'

function StyleSample() {


    const [color, setcolor] = useState("red")


    let colors=["red","black","blue","yellow","orange","pink","aqua"]


    const changeColor=()=>{
        var randomColorIndex=Math.floor(Math.random()*colors.length)

        setcolor(colors[randomColorIndex])
    }
  return <>
  <button onClick={changeColor}>Change Color</button>
  <div style={{width:200,height:200, backgroundColor:color}}></div>
  
  
  </>
}

export default StyleSample