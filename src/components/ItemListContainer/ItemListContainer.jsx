import "./ItemListContainer.css";
import {items} from '../../services/items';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
    let [data, setData] = useState([]);

    useEffect( () => {
            console.log('use effect')
            const getItems = new Promise ( (resolve, reject) => {
                    setTimeout( () => {
                        resolve(items)
                    }, 2000 )
                })
            getItems.then(respuesta => {
                setData(respuesta)
            })
        },
        []
    )
    return (
        <div className="">
            <ItemList data={data}/>
        </div>
    );
}

export default ItemListContainer;