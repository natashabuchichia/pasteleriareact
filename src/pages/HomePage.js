import '../styles/components/pages/HomePage.css';
import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/6.jpg" alt="Pasteles" />
            </div>
            <h2 className="home1">¡Bienvenidos a Pastelería Isabella!</h2>
            <div className="columnas">
                
                <p>
                    Somos un emprendimiento llevado a cabo por una enorme familia con mucho amor para todos ustedes. 
                Dos hermanas que unieron sus respectivas familias para emprender en el mundo de la repostería y, 
                por supuesto, panadería.
                </p>
                <p>
                    Los años de experiencia y testimonios nos avalan como una de las principales pastelerías de 
                Buenos Aires. Por eso estaríamos encantados de ser tu primera opción en cuanto a cosas ricas y 
                mucho sabor. 
                </p>
                <p>
                    Los Sabores de la Infancia siempre son los más añorados, 
                por eso esperamos que, en todas nuestras sucursales y en sus casas gracias a nuestra tienda online, 
                puedan rememorar aquellos momentos a través de aromas y sensaciones.
                </p>
                <p>
                    Desde la administración de Pastelería Isabella les queremos agradecer por elegirnos 
                    y por permitirnos endulzarles su día a día!
                </p>
                
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span class="cita">Me teletransportó a mi infancia! </span>
                    <span class="autor">Juliana Dominguez</span>
                    <br></br>
                    <span class="cita">¡Una de las mejores pastelerías que probé! </span>
                    <span class="autor">Susana López</span>
                    <br></br>
                    <span class="cita">¡No voy a parar de ir hasta conseguir la receta del pan dulce! </span>
                    <span class="autor">Karina Gómez</span>
                    <br></br>
                    <span class="cita">Increíble atención y muy rico todo. </span>
                    <span class="autor">José Fernández</span>
                </div>

            </div>

        </main>
    );
}

export default HomePage;