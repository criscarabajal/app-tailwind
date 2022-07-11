import React from 'react';
import Item from './Item';

// const ItemList = ({items}) => {
//   return (
//     <div>
//         {items.map(({id,title,price,description,category,image}) =>{
//             console.log(items);

//         return <Item 
//             key={id}
//             id={id}
//             title={title}
//             price={price}
//             description={description}
//             category={category}
//             image={image} />


//         })}
//     </div>
//   )
// }

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        console.log(item);
        return <Item key={item.id} product={item} />;
      })}
    </div>
  );
};


export default ItemList