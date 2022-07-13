import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import producto from '../producto.json';




const getItem = new Promise((resolve,reject) => {
    let afterPromises = true;
    setTimeout(() => {
      if (afterPromises) {
        resolve (producto);
      } else {
        reject("Fallo en Get Detail")
      }
    }, 2000);
  });



const ItemDetailContainer = ({}) => {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getItem
      .then((data) => {
        setDetails(data);
        
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
        {loading ? <span>loading...</span> : <ItemDetail key={1} details={details} />}
      </div>
    )
  }
  
  export default ItemDetailContainer;