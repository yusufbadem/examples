import React, { useState } from 'react'

function CounterSample() {


    const [counter, setcounter] = useState(0)
  
  
  return <>
    
    <h1>{counter}</h1>
    <button onClick={()=> setcounter(counter)}>Counter</button>
  
  </>   
}

export default CounterSample