import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) =>
              isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) =>
              isActive ?  "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) =>
              isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) =>
              isActive ? "activo" : undefined}>Contacto</NavLink></li>
                    <li><NavLink to="/tienda" className={({ isActive }) =>
              isActive ?  "activo" : undefined}><FaShoppingBag size={15} /></NavLink></li>
                    <li><NavLink to="/carrito" className={({ isActive }) =>
              isActive ? "activo" : undefined}><FaShoppingCart size={15} /></NavLink></li>
            </ul>          
            </div>
        </nav>

    );
}

export default Nav; 