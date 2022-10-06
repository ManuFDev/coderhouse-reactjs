import "./ItemListContainer.css";
import { items } from '../../services/items';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";


function ItemListContainer() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { cat } = useParams();

    //category
    function getSingleCategory(cat) {
        return new Promise((resolve, reject) => {
            let itemFilter = items.filter((item) => {
                return item.category === cat;
            });
            setTimeout(() => {
                if (itemFilter) resolve(itemFilter);
                else reject(new Error("Funko no encontrado"));
            }, 1200);
        });
    }

    useEffect(() => {
        setIsLoading(true);
        if (cat === undefined) {
            const getItems = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(items)
                }, 1200)
            })
            getItems
                .then((respuesta) => setData(respuesta) )
                .catch((errormsg) => {
                    console.log(errormsg.message);
                    setError(errormsg.message);
                })
                .finally( () => setIsLoading(false))
        } else {
            getSingleCategory(cat)
                .then((respuesta) => setData(respuesta))
                .catch((errormsg) => {
                    console.log(errormsg.message);
                    setError(errormsg.message);
                })
                .finally( () => setIsLoading(false))
                
        }
    },
        [cat]
    )

    
    if (isLoading) {
        return <>
        { error ? 
        <div>
        <h1 style={{color: "#aa0033"}}>Error obteniendo los datos</h1>
        <p>{error}</p>
        </div> : <Spinner/>}
        </>
    }

    return (
        <div className="container">
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;