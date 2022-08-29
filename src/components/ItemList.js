import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => {
        return <Item key={item.id} product={item} />;
      })}
    </div>
  );
};

export default ItemList;
