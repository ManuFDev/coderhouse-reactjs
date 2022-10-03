import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Link className='detail-cart' to={"/cart"}>
            <div className="cart-container">
                <AiOutlineShoppingCart
                    className='cart-icono' />
                <div className='display'>1</div>
            </div>
        </Link>
    )
}

export default CartWidget;