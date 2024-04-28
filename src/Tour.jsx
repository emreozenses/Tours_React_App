import React from 'react'

const Tour = (props) => {
  const {name,info,price,image,key} =props;
  
  return (
    <div key={key} >
        <p>{price}</p>
        <img src={image} alt={name}/>
        <h2>{name}</h2>
        <p>{info}</p>
        <button type='button' className='btn' onClick={()=>{}}>Not Interested</button>
    </div>
  )
}

export default Tour