import React from 'react';

const ItemDetail = ({productDetail}) => {
  
  console.log(productDetail);
  console.log(productDetail.title);

const {title,price,description,image} = productDetail;
  return (
    
    <div>
      <div className="card flex flex-row my-20">
        <figure>
          <img className='w-2/4' src={image} alt="Imagen" />
        </figure>
        <div className="card-body flex flex-col justify-start">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className='w-2/4 my-10'>{description}</p>
          <p className='text-2xl text-emerald-400'>{price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>

  );
};



export default ItemDetail;