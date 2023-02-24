import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function About() {
  var [newone, setNewone] = useState([])
  var selectedid=useParams()
  console.log(selectedid)
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${selectedid.id}`)
    .then(res=>res.json())
    .then(json=>setNewone(json))
  },[selectedid.id])
  return (
    <div>
     <div className='row'>
       <div className='col-md-6 border border-dark'>
       <img src={newone?.image} alt='photo' width={"400px"} />
       </div>
       <div className='col-md-6'>
        <h3>{newone?.title}</h3>
        <h3>{newone?.price}</h3>
        <p><b>{newone?.category}</b></p>
        <small>{newone?.description}</small>
       </div>
     </div>
    </div>
    
  )
}

export default About;