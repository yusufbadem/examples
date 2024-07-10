import React, { useState } from 'react'

function ArraySample2() {
  
  const [numbers, setnumbers] = useState([1,2,32])
  
  
  let total=0;
  numbers.forEach(item=>{
    total=total+item;
  })

  let avg =total/numbers.length;
  
  //bu fonksiyon diziye 0 ile 100 arası bir sayı ekleyecek
  const AddRandom=()=>{
    var randomNumber=Math.floor(Math.random() * 100)
    setnumbers([...numbers,randomNumber])
  }


  const removeNumber=(key)=>{
    numbers.splice(key,1)
    setnumbers([...numbers])
  }

  return <>

  <h1>Avg :{avg.toFixed(2)}</h1>
  <h1>Avg :{total}</h1>
  <button onClick={AddRandom}>Add Random number </button>
  <button onClick={()=> setnumbers([])}>Clear</button>

  <ul>
    {
        numbers.map((item,key)=><li onClick={()=>removeNumber(key)}>{item}</li>)
    }
  </ul>
  
  
  </>
}

export default ArraySample2