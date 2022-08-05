import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getItemsFiltered } from '../Firebase/Firebase';
import ItemList from './ItemList';



const ItemListConteiner = ({greeting}) => {

  const [products, setProducts] = useState([]);
  console.log ("products:", products);
 
  const { categoryId } = useParams();
  console.log ("categoryId:", categoryId);

 
  
  useEffect(() => {

    getItemsFiltered(categoryId)
    .then((snapshot) => {
        setProducts(
          snapshot.docs.map((document) => {
            return {...document.data(), id: document.id};
          })
        );
      });
    }, [categoryId]);

  return (
    <div>
      
        {greeting}
        
        {<ItemList items={products} />}
    </div>
  )
}

export default ItemListConteiner;
