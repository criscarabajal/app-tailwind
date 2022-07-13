import React from 'react'


const Item = ({product}) => {
  const {id,title,price,description,category,image} = product;

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center w-80' >
            <img className='w-40' src={image} alt={title}></img>
            <h3 className='text-2xl'>{title}</h3>
            <span> {description} </span>
            <span> {id} </span>
            <span> {price} </span>
      </div>
      
    </div>
  )
};



export default Item;