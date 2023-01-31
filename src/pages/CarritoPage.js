import '../styles/components/pages/CarritoPage.css';
import React, { useContext } from "react";
import {PRODUCTS} from '../productos';
import { ShopContext } from '../context/shopcontext';
import {CartItem} from '../pages/CartItem';

import '../styles/components/pages/CarritoPage.css';

import { useNavigate } from 'react-router-dom';
 

const CarritoPage = (props) => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

const navigate = useNavigate ()

    return (
       <main>
            <div className="cart">
                <h2 className="">Carrito</h2>
            <div className="cartItems">
                {PRODUCTS.map((product) => { 
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>;
                    }

                })}
                </div>
            {totalAmount > 0 ?
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/tienda")}>Continuar comprando</button>
                <button onClick={() => navigate("/proximamente")}>Finalizar compra</button>
            </div> 
            : <h2>Tu carrito está vacío</h2>} 
             
            </div>
       </main>
    );
}

export default CarritoPage;