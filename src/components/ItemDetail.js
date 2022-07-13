import React from 'react'



const ItemDetail = ({details}) => {
  const {id,title,price,description,category,image} = details[0];
  console.log(details);
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center' >
            <img className='w-40' src={image} alt={title}></img>
            <h3 className='text-2xl'>{title}</h3>
            <span> {description} </span>
            <span> {price} </span>
      </div>
    </div>
  )
};



export default ItemDetail;