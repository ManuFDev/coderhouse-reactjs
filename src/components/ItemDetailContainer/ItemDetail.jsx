import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { items } from '../../services/items';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';

function ItemDetail() {

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
            }, 2000);
        });
    }

    useEffect(() => {
        getSingleProduct(id).then((resp) => setProduct(resp));
    }, [id])

    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{product.title}</h2>
                <img className='detail-img' src={product.img} alt={product.title} />
            </div>
            <div className='detail-buy'>   
                    <h2 className='detail-price'>$ {product.price}</h2>
                <ItemCount />
                <Button variant='dark' className='detail-button'>
                    <AiOutlineShoppingCart className="cart-icon-button" />
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemDetail;