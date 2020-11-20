import React from 'react';
import { Link } from  'react-router-dom';

import './style.css';
import logo from '../../Assets/logo.svg';




const Header = () => {
    return(
        <header className="container">
            <Link to="/">
                <img className="logo" src={logo} alt="Project Logo" />
            </Link>
    
            <Link  className="reservation" to="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>3 reservas</span>
                </div>
            </Link>
      </header>
    );
}

export default Header;