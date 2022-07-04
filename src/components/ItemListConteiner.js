import React from 'react';
import ItemCount from './ItemCount';

const ItemListConteiner = ({greeting}) => {
  return (
    <div>
        {greeting}
        <ItemCount
          stock={5} initial={1} onAdd={() => alert("agregado")}
        />
    </div>
  )
}

export default ItemListConteiner;