import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { items } from '../../services/items';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const {id} = useParams();

    function getSingleProduct(idItem) {
        return new Promise((resolve, reject) => {
            let itemFind = items.find((item) => {
                return item.id === parseInt(idItem)
            });
            setTimeout(() => {
                if (itemFind) resolve(itemFind);
                else reject(new Error("Funko no encontrado"));
            }, 0);
        });
    }

    useEffect(() => {
        getSingleProduct(id).then((resp) => setProduct(resp));
    }, [id])

  return (
      <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer