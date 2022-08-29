import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartProduct = ({ title, price, image, quantity, id }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="flex flex-col my-10">
      <div className="flex bg-slate-600 py-2">
        <span className="ml-10 w-1/3">Producto</span>
        <span className="w-1/4 ml-44">Cantidad</span>
        <span className="w-1/5 ml-44">Precio</span>
        <span></span>
      </div>
      <div className="flex justify-between my-8">
        <div class="avatar ml-10 w-1/3">
          <div class="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
          <span className="ml-5">{title} </span>
        </div>

        <span className="w-1/5">{quantity} </span>
        <span className="mr-24">${quantity * price} </span>
        <button onClick={() => deleteItem(id)} className="mr-14 mb-8">
          x
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
