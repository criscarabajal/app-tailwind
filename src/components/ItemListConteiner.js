import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import producto from '../producto.json';





const getData = new Promise((resolve,reject) => {
  let afterPromises = true;

  setTimeout(() => {
    if (afterPromises) {
      resolve (producto);
    } else {
      reject("Fallo en Get Data")
    }
  }, 2000);
});



const ItemListConteiner = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  
  useEffect(() => {
    getData
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [] )

  return (
    <div>
      
        {greeting}
        
        {loading ? <span>loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListConteiner;