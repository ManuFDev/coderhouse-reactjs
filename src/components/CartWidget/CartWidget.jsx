import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {
    return (
        <div className="cart-container">
            <AiOutlineShoppingCart 
            className='cart-icono'/>
            <div className='display'>1</div>
        </div>
    )
}

export default CartWidget;