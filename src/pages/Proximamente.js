import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/components/pages/Proximamente.css';



const Proximamente = (props) => {
    const navigate = useNavigate ()

    return (
       <main>
            <div className="box">
             <p>Próximamente habilitaremos nuestra tienda online. ¡Gracias por elegirnos!</p>
             <div className="carrito">
                <button onClick={() => navigate("/")}>Volver a la página principal</button>
            </div> 
            </div>
       </main>
    );
}

export default Proximamente;