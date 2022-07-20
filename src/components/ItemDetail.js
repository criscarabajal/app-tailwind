import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({productDetail}) => {

const {title,price,description,image} = productDetail;

const [cart, setCart] = useState(true);

  return (
    <div>
      <div className="card flex flex-row my-20">
        <figure>
          <img className="w-2/4" src={image} alt="Imagen" />
        </figure>
        <div className="card-body flex flex-col justify-start">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="w-2/4 my-10">{description}</p>
          <p className="text-2xl text-emerald-400">{price}</p>
          <div className="card-actions justify-start">
            {cart ? (
              <ItemCount
                stock={5}
                initial={1}
                onAdd={() => {
                  alert("Agregado al carrito");
                  setCart(false);
                }}
              />
            ) : (
              <Link to="/cart" className="btn btn-primary">
                Ver Carrito
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default ItemDetail;