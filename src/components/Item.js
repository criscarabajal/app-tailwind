import React from 'react'



// const Item = ({id,title,price,description,category,image}) => {

//   console.log(Item, "estoy recibiendo item")
    
//   return (
//     <div>
//         <img src={image} alt={title}></img>
//         <h3>{title}</h3>
//         <span> {description} </span>
//         <span> {id} </span>
//         <span> {price} </span>
//     </div>
//   )
// }

const Item = ({product}) => {
  const {id,title,price,description,category,image} = product;

  return (
    <div>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <span> {description} </span>
        <span> {id} </span>
        <span> {price} </span>
    </div>
  )
};



export default Item;