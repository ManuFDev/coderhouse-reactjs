import './Navbar.css'
import logo from '../../img/frame.svg';
import CartWidget from '../CartWidget/CartWidget';
import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <picture className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </picture>
            <nav className="navbar">
                <ul className="menu">
                    <li className="menu-item">
                    <Link to='/productos' className="menu-link">Funko Pop</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/contacto' className="menu-link">Contacto</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/redes' className="menu-link">Redes</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/categoria1' className="menu-link">Categoria 1</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/categoria2' className="menu-link">Categoria 2</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default Navbar;