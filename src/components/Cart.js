import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart, totalItems, totalPrice, removeAll } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <CartProduct
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      ))}
      {cart.length > 0 && (
        <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold shadow-xl bg-slate-600">
          <div className="grid h-20 flex-grow rounded-box place-items-center">
            Total de productos: {totalItems}
          </div>
          <div className="grid h-20 flex-grow rounded-box place-items-center">
            Total: ${totalPrice}
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        {cart.length > 0 ? (
          <>
            <button
              className="btn btn-outline btn-success w-48 mb-32"
              onClick={removeAll}
            >
              Borrar productos
            </button>
            <Link to="/Form">
              <label
                for="my-modal-6"
                className="btn btn-secondary btn-block w-48 mb-32 ml-12"
              >
                comprar
              </label>
            </Link>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  ¡Gracias por comprar con nosotros!
                </h3>
                <p className="py-4">Tus productos estan siendo preparados.</p>
                <div className="modal-action">
                  <label for="my-modal-6" className="btn">
                    Siuuu!
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link to="/">
            <h1>No hay nada en tu carrito</h1>
            <button
              className="btn btn-primary btn-block w-48 mb-32"
              onClick={removeAll}
            >
              Comprar productos
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
