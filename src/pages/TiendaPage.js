import '../styles/components/pages/TiendaPage.css';
import React from "react";
import {PRODUCTS} from '../productos';
import { Product } from './Product';

import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


const TiendaPage = (props) => {

const navigate = useNavigate ()

    return (
       <main>
            <div className="tienimg">
                <img src="images/tienda/tienda1.jpg" alt="pasteles2"></img>
            </div>
            <h2 className="tienda">Tienda Online</h2>
            <div className="products">{PRODUCTS.map((product) => (<Product data={product} />))}</div>
            <div className="box">
            <div className="carrito">
                <button onClick={() => navigate("/carrito")}><FaShoppingCart size={15} /> Ir al carrito</button>
            </div> 
            </div>
            
       </main>
    );
}

export default TiendaPage;