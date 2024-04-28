import React from 'react'

const Tour = (props) => {
  const {name,info,price,image,id,removeTour} =props;
  
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  )
}

export default Tour