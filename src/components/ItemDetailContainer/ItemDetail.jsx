import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function ItemDetail({product}) {

    const [estadoCart,setEstadoCart] = useState(false);
        const handleAddToCart = (values) => {
            setEstadoCart(true);
            toast.success(`Agregaste al carrito ${values} Funkos`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "agregar-carrito",
                });    
        }

    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{product.title}</h2>
                <img className='detail-img' src={product.img} alt={product.title} />
            </div>
            <div className='detail-buy'>   
                    <h2 className='detail-price'>$ {product.price}</h2>
                    { 
                    estadoCart === false ? <ItemCount onAddToCart={handleAddToCart}/> : <Link className='detail-cart' to={"/cart"}>Ir al carrito</Link>}
                <ToastContainer/>
            </div>
        </div>
    )
}

export default ItemDetail;

