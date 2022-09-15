import './ItemCount.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';



function ItemCount(props) {

    const [values, setValues] = useState({ contador: 1, stock: 5 });
    const onAdd = () => {
        if (values.contador < 5) {
            // setValues({ ...values, contador: values.contador + 1 });
            setValues({ contador: values.contador + 1, stock: values.stock - 1 });
        }
    }

    const onDel = () => {
        if (values.contador > 1) {
            setValues({ contador: values.contador - 1, stock: values.stock + 1 });
        }
    }

    return (
        <div className='count-container'>
            <div className='item-count-container'>
                <Button
                    className='btn-resta'
                    onClick={onDel}
                    variant="dark">-</Button>
                <span className='contador'>{values.contador}</span>
                <Button
                    className='btn-suma'
                    onClick={onAdd}
                    variant="dark">+</Button>
            </div>
            <div className='stock'>
                Stock: {values.stock}
            </div>
        </div>
    );
}

export default ItemCount;