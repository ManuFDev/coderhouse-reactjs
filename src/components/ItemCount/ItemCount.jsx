import React from 'react';
import './ItemCount.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount(props) {

    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(5);

    const stockAdd = () => {
        if (count < 5) {
            setStock(stock - 1);
        }
    }

    const stockDel = () => {
        if (count > 1) {
            setStock(stock + 1);
        }
    }

    const onAdd = () => {
        if (count < 5) {
            setCount(count + 1);
            stockAdd()
        }
    }
    const onDel = () => {
        if (count > 1) {
            setCount(count - 1);
            stockDel()
        }
    }

    return (
        <div className='count-container'>
            <div className='item-count-container'>
                <Button
                    className='btn-resta'
                    onClick={onDel}
                    variant="dark">-</Button>
                <span className='contador'>{count}</span>
                <Button
                    className='btn-suma'
                    onClick={onAdd}
                    variant="dark">+</Button>
            </div>
                <div className='stock'>
                    Stock: {stock}
                </div>
        </div>
    );
}

export default ItemCount;