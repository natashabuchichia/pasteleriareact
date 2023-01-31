import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    
    const initialForm = {
       nombre: '',
       apellido: '',
       email: '',
       telefono: '',
       asunto: '',
       mensaje: '',
        }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name] : value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)

        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <p className="reclamos">Para reclamos y quejas llene los siguientes datos y esté atento a su email durante los próximos días. ¡Muchas gracias por su paciencia!
                <p>Los campos que incluyan (*) son obligatorios. </p>
                </p>
                <div className="col">
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre: (*) </label>
                        <input type="text" 
                               id="nombre"
                               name="nombre" 
                               placeholder="Ingrese su nombre aquí" 
                               value={formData.nombre} 
                               onChange={handleChange} 
                               required="required"></input>
                    </p>
                    <p>
                        <label for="apellido">Apellido: (*) </label>
                        <input type="text" 
                               id="apellido"
                               name="apellido" 
                               placeholder="Ingrese su apellido aquí" 
                               value={formData.apellido} 
                               onChange={handleChange} 
                               required="required"></input>
                    </p>
                    <p>
                        <label for="email">Email: (*) </label>
                        <input type="email" 
                               id="email" 
                               name="email" 
                               placeholder="Ingrese su correo aquí" 
                               value={formData.email} 
                               onChange={handleChange} 
                               required="required"></input>
                    </p>
                    <p>
                        <label for="telefono">Número de Teléfono: (*) </label>
                        <input type="number" 
                               id="telefono" 
                               name="telefono" 
                               placeholder="Ingrese su teléfono aquí" 
                               value={formData.telefono} 
                               onChange={handleChange} 
                               required="required"></input>
                    </p>
                    <p>
                        <label for="asunto">Asunto: (*) </label>
                        <input type="text" 
                               id="asunto" 
                               name="asunto" 
                               placeholder="Ingrese el asunto aquí" 
                               value={formData.asunto} 
                               onChange={handleChange} 
                               required="required"></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje: (*) </label>
                        <textarea name="mensaje" 
                               id="mensaje" 
                               placeholder="Detalle para qué se contacta con nosotros" cols="30" rows="10" 
                               value={formData.mensaje} 
                               onChange={handleChange}
                               required="required"></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar"></input>
                    </p>
                    {sending ? <p>Enviando formulario...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
                </div>
            </div>
            <aside>
                 <div className="contactoimg">
                    <img src="images/contacto/1.png" alt="email"></img>
                 </div>
            </aside>
            <div class="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Puede contactarse o estar atento a nuestras promociones a través de los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 555-9830</li>
                    <li>Email: pasteleria.by.isabella@gmail.com</li>
                </ul>
            </div>
        </main>
    )
}

    
   
export default ContactoPage;