import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Item({data}) {
    const urlFunko = `/funko/${data.id}-${data.title}`

    return(
        <Card
        id={data.id}
        style={{ width: "30rem" }}>
        <Card.Img className="card-img" variant="top" src={data.img} />
        <Card.Body className='card-body'>
            <Card.Title className="card-title">{data.title}</Card.Title>
            <Card.Text className="card-description">
                $ {data.price}
            </Card.Text>
            <Link to={urlFunko} className="card-detalle-button">
                Ver detalle
            </Link>
            <Button variant='dark' className='card-button'>
                <AiOutlineShoppingCart className="cart-icon-button" />
                Agregar al carrito
            </Button>
        </Card.Body>
    </Card>
    );
}

export default Item;