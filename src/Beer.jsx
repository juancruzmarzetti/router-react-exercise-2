import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams();
    const beerId = params.id;

    const navigate = useNavigate();
    
    const getBeer = async()=>{
        const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${beerId}`);
        const data = await res.json();
        setBeer(data);
    }

    useEffect(()=>{
        getBeer();
    }, [])
  
  return (
    <div>
        <h2>Cerveza {beer.name}</h2>
        <div className='card'>
            <p>{beer.brewery_type}</p>
            <p>{beer.city}</p>
            <p>{beer.country}</p>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer