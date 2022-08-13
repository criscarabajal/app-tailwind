import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import CartContext from '../context/CartContext';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import {db} from '../Firebase/Firebase';
import { Link } from 'react-router-dom';


const Form = () => {
    
    const {cart, removeAll} = useContext(CartContext)
    const [orderId, setOrderId] = useState({})
    
    const { register, handleSubmit, formState: {errors}, reset, watch } = useForm();
    
    const watchEmail = watch('email');

    const emailValidation = (value) => {
        if(value !== watchEmail) {
            return 'Los emails no coinciden'
    }}

    
    const onSubmit = (data) => {
        
            console.log(data);
            
            cart.map(item => {
              const order = {
              date: Timestamp.fromDate(new Date()),
              buyer: {name: data.nombre, phone: data.telefono, email: data.email, repEmail: data.repEmail},
              items: [{id: item.id, title:item.title, quantity: item.quantity, price: item.price}],
              total: item.price * item.quantity,
            };
            
            const orderCollection = collection(db, 'Orders');
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id)
                console.log(id)
            });
            });

            reset();
            removeAll();
          
    }

    return (
      <>
        <div className="flex justify-center content-center">
          <form
            className="flex flex-col content-center w-1/2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered mt-10 mb-2"
              {...register("nombre", {
                required: "Nombre es requerido",
              })}
            />
            {errors.nombre && (
              <span className="text-red-500">{errors.nombre.message}</span>
            )}

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered my-2"
              {...register("email", {
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">Email no válido</span>
            )}

            <input
              type="email"
              placeholder="Repetir Email"
              className="input input-bordered my-2"
              {...register("repEmail", {
                validate: (value) => emailValidation(value),
              })}
            />
            {errors.repEmail && (
              <span className="text-red-500">{errors.repEmail.message}</span>
            )}

            <input
              type="number"
              placeholder="Telefono"
              className="input input-bordered my-2"
              {...register("telefono", {
                required: true,
              })}
            />
            <input
              type="submit"
              value="Enviar"
              className="btn btn-secondary w-44 my-2"
            />
          </form>
        </div>
        {orderId.length > 1 && (
          <div className="text-center mt-10">
            <p className='text-xl'>Su pedido tiene el id:<span className='text-green-400'> {orderId} </span></p>
          <Link to='/'>
            <button className="btn btn-primary w-44 my-2">
            Inicio
            </button>
          </Link>
          
          </div>
          
        )}
        
      </>
    );
}




export default Form;