import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import producto from '../producto.json';


// const getItem = new Promise((resolve,reject) => {
//     let afterPromises = true;
//     setTimeout(() => {
//       if (afterPromises) {
//         resolve (producto);
//       } else {
//         reject("Fallo en Get Detail")
//       }
//     }, 2000);
//   });


const ItemDetailContainer = () => {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    
    const productDetail = producto.filter((item) => item.id === parseInt(params.id));


    const getItem = new Promise((resolve,reject) => {
      let afterPromises = true;
      setTimeout(() => {
        if (afterPromises) {
          resolve (productDetail);
        } else {
          reject("Fallo en Get Detail")
        }
      }, 2000);
    });

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
    }, [params.id] )
  
    return (

      <div>
        {loading ? <span>loading...</span> : 
          details.map((item) => {
            return <ItemDetail key={item.id} productDetail={item} />
          })         
        } 
      </div>
    )
}
  
      

  export default ItemDetailContainer;