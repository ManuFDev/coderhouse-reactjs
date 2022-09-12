import './Navbar.css'
import logo from '../../img/frame.svg';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
    <header>
        <picture className="logo">
            <a href="index.html"><img src={logo} alt="" /></a>
        </picture>
        <nav className="navbar">
            <ul className="menu">
                <li className="menu-item">
                    <a href="/#" className="menu-link">Productos</a>
                </li>
                <li className="menu-item">
                    <a href="/#" className="menu-link">Nosotros</a>
                </li>
                <li className="menu-item">
                    <a href="/#" className="menu-link">Redes</a>
                </li>
                <li className="menu-item">
                    <a href="/#" className="menu-link">Contacto</a>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    );
}

export default Navbar;