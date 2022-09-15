import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai";
import getItems from '../../services/items';
import { useState, useEffect } from 'react';



function ItemListContainer(props) {
    let [data, setData] = useState([]);

    useEffect( () => {
            console.log('use effect')
            getItems().then(respuesta => {
                setData(respuesta)
            })
        },
        []
    )
    return (
        <div className="productos-container container">
            {data.map((items) => {
                return (
                    <Card 
                    style={{ width: "30rem" }} 
                    className='card'
                    key={items.id}>
                        <Card.Img className="card-img" variant="top" src={items.img} />
                        <Card.Body className='card-body'>
                            <Card.Title className="card-title">{items.title}</Card.Title>
                            <Card.Text className="card-description">
                                ${items.price}
                            </Card.Text>
                            <ItemCount />
                            <Button variant='dark' className='card-button'>
                                <AiOutlineShoppingCart className="cart-icon-button" />
                                {props.buttonText}
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </div>
    );
}

export default ItemListContainer;