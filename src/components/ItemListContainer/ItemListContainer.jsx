import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai";


function ItemListContainer(props) {
    return (
        <div className="productos-container">
            <Card style={{ width: "30rem" }} className='card'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body className='card-body'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className="card-description">
                        {props.description}
                    </Card.Text>
                    <ItemCount />
                    <Button variant='dark' className='card-button'>
                        <AiOutlineShoppingCart className="cart-icon-button"/>
                        {props.buttonText}
                    </Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default ItemListContainer;