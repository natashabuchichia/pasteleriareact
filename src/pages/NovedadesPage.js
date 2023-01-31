import '../styles/components/pages/NovedadesPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState (false);
    const [novedades, setNovedades] = useState ([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading (true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <main>
            <div className="novimg">
                     <img src="images/home/3.jpg" alt="nov2"></img>
                </div>
                <h2 className="noved">Novedades</h2>
            <section className="caja">
            {loading ? (
                <p>Cargando...</p>
            ) : ( 
                novedades.map(item => <NovedadItem key={item.Id} 
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} /> ) 
            )}
            </section>
       </main> 
    );
}

export default NovedadesPage;