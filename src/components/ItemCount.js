import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        setCount((prevVal) => (prevVal > 0 ? count -1 : count));
    };

    return (
        <div className="contadorWrap">
        <div className="contador" >
            <button className="btnSumar" onClick={restar}>-</button>
            <h3>{count}</h3>
            <button className="btnRestar" onClick={sumar}>+</button>
        </div>
            <button className="btnAgregar" onClick={ () =>
                count <= stock && onAdd(count)
            }>Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount;