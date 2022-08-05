
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDetailItem } from '../Firebase/Firebase';

const ItemDetailContainer = () => {

  let {idItem} = useParams();
  console.log (idItem);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    getDetailItem(idItem).then((snapshot) => {
      setData(snapshot.data())
    })
  }, [idItem]);

  

  return (<div className="mt-10">
    {<ItemDetail productDetail={data} />}
  </div>
  )
}

export default ItemDetailContainer;