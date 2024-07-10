import React, { useState } from 'react'

function StateIntro() {

const changeColor= () =>{
document.getElementById("title").style.color="aqua" 
}

// Aşagıdaki kod javascripile yazılmış kod kısmı 
let counter=0
const increase= ()=> {
counter = counter +1;
document.getElementById("numberInc").innerHTML="Counter: "+counter;

}

// Aşagıdaki yazılmış kısım React ta UseState Kullanılarak yapılmış kısmı

const [counter1, setcounter] = useState("red")  

const increase1=()=>{
  setcounter(counter1 + 1)
}

const [textColor, setcolor] = useState("red")

const changeColor1= ()=>{
  setcolor("black")//bu fonksiyona ne deger verirsem artık senin degişkenin odur
}

  return <>
  
  <h1 id='title' style={{color:'red'}}>İstanbul</h1>
  <button onClick={changeColor} >Change H1 Color</button>


  <h1 id='numberInc'>JavaScript Counter :0</h1>
  <button onClick={increase} >Increase Number</button>

  <h1>UseState Counter :{counter1}</h1>
  <button onClick={increase1} >Increase Number</button>
  
  
  <h1 style={{color:textColor}}>UseState ColorChange </h1>
  <h1 style={{color:textColor}}>UseState ColorChange1 </h1>
  <h1 style={{color:textColor}}>UseState ColorChange2 </h1>
  <button onClick={changeColor1} >Change  Color</button>
  
  </>
  
  
}

export default StateIntro