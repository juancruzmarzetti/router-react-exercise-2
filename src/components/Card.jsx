import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {

  const beerUrl = `/beer/${data.id}`;

  return (
    <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.state_province}</p>
        <p>{data.website_url}</p>
        <Link to={beerUrl}><button>Ver detalle</button></Link>
    </div>
  )
}

export default Card