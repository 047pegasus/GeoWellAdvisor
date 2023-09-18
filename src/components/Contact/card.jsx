import { useState } from 'react'
import './card.css';


function Card({ name, title, image}) {

  return (
    <>
      <div className='card-container'>
          <img className="card-photo w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt={name+"'s image"} />
          <h5 className="card-name">{name}</h5>
          <span className="card-title">{title}</span>
      </div>
    </>
  )
}

export default Card
