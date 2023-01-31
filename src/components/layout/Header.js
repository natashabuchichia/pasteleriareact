import '../../styles/components/layout/Header.css';
import React from 'react';

import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";


const Header = (props) => {
    
    return (
        <div className="holder">
            <div className="contenedor">
                 <img src="images/logo.png" width="150" alt="Pastelería Isabella" />
            </div>
            <h1 className="pagina">Pastelería Isabella</h1>
            <div className="social">
                <a href="https://facebook.com/pasteIsabella" target="_BLANK" rel="noopener noreferrer" class="link-dark"><FaFacebook size={30}/></a>
            </div>
            <div className="social2">
                <a href="https://pinterest.com/pasteIsabella_" target="_BLANK" rel="noopener noreferrer" class="link-dark"><FaPinterest size={30}/></a>
            </div>
            <div className="social3">
                <a href="https://instagram.com/pasteIsabella_" target="_BLANK" rel="noopener noreferrer" class="link-dark"><FaInstagram size={30} /></a>
            </div>
            <div>

            </div>
            
        </div>
    );
}


export default Header; 