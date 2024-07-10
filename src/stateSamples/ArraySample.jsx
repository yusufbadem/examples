import React, { useState } from 'react'

function ArraySample() {


const [cities, setcities] = useState(["izmir","istanbul","ankara"])

  return <>
  <h1>Length {cities.length}</h1>
  <ul>
    {
        cities.map(item=> <li>{item}</li>)
    }
  </ul>
  

<button onClick={()=> setcities([])}>Clear</button>

  </>
    
  
}

export default ArraySample