import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { items } from '../../services/items';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './ItemDetail.css';


function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    function getSingleProduct(idItem) {
        return new Promise((resolve, reject) => {
            let itemFind = items.find((item) => {
                return item.id === parseInt(idItem)
            });
            setTimeout(() => {
                if (itemFind) resolve(itemFind);
                else reject(new Error("Funko no encontrado"));
            }, 1200);
        });
    }

    useEffect(() => {
        getSingleProduct(id)
        .then((resp) => setProduct(resp))
        .catch((errormsg) => {
            console.log(errormsg.message);
            setError(errormsg.message);
        })
        .finally( () => setIsLoading(false));
    }, [id])

    if (isLoading) {
        return <>
        { error ? 
        <div className='error-container'>
        <h1 style={{color: "#aa0033"}}>Error obteniendo los datos</h1>
        <p>{error}</p>
        </div> : <Spinner/>}
        </>
    }

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer