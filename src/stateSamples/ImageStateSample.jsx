import React,{useState} from 'react'

function ImageStateSample() {


const [imageSource, setimageSource] = useState("https://static8.depositphotos.com/1101004/829/i/450/depositphotos_8295961-stock-photo-lazy-koala.jpg")

let imageSources=[
    "https://static8.depositphotos.com/1101004/829/i/450/depositphotos_8295961-stock-photo-lazy-koala.jpg"
    ,"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kodiak_Brown_Bear.jpg/640px-Kodiak_Brown_Bear.jpg",
    "https://www.mustafacetiner.com/wp-content/uploads/2019/06/616x321-ruyada-aslan-gormek-ne-anlama-gelir-1540210805917-616x308.jpg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.wiktionary.org%2Fwiki%2Fak_ba%25C5%259Fl%25C4%25B1_kartal&psig=AOvVaw0U_uVPsXpgJY7wwp4Z-Tt8&ust=1720723588583000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjL5YORnYcDFQAAAAAdAAAAABAE",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFTtZRrlmJhS8Qv__hwZfUFJ40h0hjNqamJRybp8gH-9n2jTMlDsQw0hEAGXCzrCZXxztIu3qNlyEr_5dtas11rQRnZDyU5zd-CJwEjrB0olLNDfoAos_H5vjYPvvk7-2GbUP-7Sv2uDRBZSloc5-IrScb5nn3lAAo_PfIZIAoq247SAlVbO0PZFkmihU/w640-h398-rw/2.Kanarya.jpg"
    
]


const change=()=>{

const randomPicture=Math.floor(Math.random()* imageSources.length)

setimageSource(imageSources[randomPicture]);
}


  return <>
  <button onClick={change}>Change The Picture</button>
  <hr />
<img style={{width:400,height:300}} src={imageSource} alt="" />

  </>

  
}

export default ImageStateSample