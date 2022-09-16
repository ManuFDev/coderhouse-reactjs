import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai"

function Item({data}) {
    return(
        <Card
        style={{ width: "30rem" }}
        className='card'>
        <Card.Img className="card-img" variant="top" src={data.img} />
        <Card.Body className='card-body'>
            <Card.Title className="card-title">{data.title}</Card.Title>
            <Card.Text className="card-description">
                $ {data.price}
            </Card.Text>
            <ItemCount />
            <Button variant='dark' className='card-button'>
                <AiOutlineShoppingCart className="cart-icon-button" />
                Agregar al carrito
            </Button>
        </Card.Body>
    </Card>
    );
}

export default Item;