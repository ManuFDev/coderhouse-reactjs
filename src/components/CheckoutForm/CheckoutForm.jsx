import './CheckoutForm.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firestore';



function CheckoutForm() {

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const navigate = useNavigate();
    const context = useContext(cartContext);
    const { cart, getItemsTotalPrice } = context;

    const handleCheckout = (e) => {
        e.preventDefault();

        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemsTotalPrice()
        };
        createBuyOrder(orderData).then((orderid) => {
            navigate(`/checkout/${orderid}`);
        });
    }

    function inputChangeHandler(e) {
        let inputName = e.target.name;
        let value = e.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm)
    }



    return (
        <div className="form-container">
            <form onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>
                <button type='submit' className='cartview-button-finish'>Finalizar Compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;