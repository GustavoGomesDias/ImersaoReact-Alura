import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GustaFlix Logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
    );
}

export default Menu; //Pra poder usar ele em outros lugares

// as="a" => Button tá se comportando como uma tag a


// href => to

// Link é pra ter o comportamento de SPA