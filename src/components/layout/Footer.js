import '../../styles/components/layout/Footer.css';
import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";


const Footer = (props) => {
    return (
        <footer>
            <p>Derechos reservados ©. Pastelería Isabella, 2022.</p>
            <div className="redes">
            <a href="https://facebook.com/pasteIsabella" 
                    target="_BLANK" 
                    rel="noopener noreferrer" 
                    class="link-dark">
                        <FaFacebook size={40}/>
            </a>
            <a href="https://pinterest.com/pasteIsabella_" 
                    target="_BLANK" 
                    rel="noopener noreferrer" 
                    class="link-dark">
                        <FaPinterest size={40}/>
            </a>
            <a href="https://instagram.com/pasteIsabella_" 
                    target="_BLANK" 
                    rel="noopener noreferrer" 
                    class="link-dark">
                        <FaInstagram size={40}/>
            </a>
            </div>
        </footer>
    );
}

export default Footer; 