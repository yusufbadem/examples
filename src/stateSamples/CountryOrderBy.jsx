import React, { useState } from 'react'

function CountryOrderBy() {


    const [changeCounty, setchangeCounty] = useState(["Türkiye","Almanya","İran","Rusya","Çin","Suriye","Yunanistan"])
  
  const OrderedCountry=()=>{
    setchangeCounty(changeCounty)
  }
  
  const OrderByContries=()=>{
    var sortedCountries=[...changeCounty].sort()
    setchangeCounty(sortedCountries)
  }
  
    return <>
    
    <button onClick={OrderByContries}>OrderBy</button>
    <button onClick={()=>setchangeCounty([])}>Clear</button>
    <h1>lenght: {changeCounty.length}</h1>
    <h1>{ changeCounty.join(",")}</h1>
    
    </>
}

export default CountryOrderBy