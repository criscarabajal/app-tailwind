import React from 'react'


const Item = ({product}) => {
  const {id,title,price,description,category,image} = product;

  return (
    // <div className='flex justify-center'>
    //   <div className='flex flex-col items-center w-80' >
    //         <img className='w-40' src={image} alt={title}></img>
    //         <h3 className='text-2xl'>{title}</h3>
    //         <span> {description} </span>
    //         <span> {id} </span>
    //         <span> {price} </span>
    //   </div>
      
    // </div>
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={image} alt={title} class="rounded-xl"></img>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  )
};



export default Item;