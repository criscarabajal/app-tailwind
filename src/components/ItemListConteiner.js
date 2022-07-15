import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import producto from '../producto.json';
import NavBar from './NavBar';






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
    <NavBar />
        {greeting}
        <ItemCount
          stock={5} initial={1} onAdd={() => alert("agregado")}
        />
        {loading ? <span>loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListConteiner;