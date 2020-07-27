import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="GustaFlix Logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">Novo vídeo</Button>
        </nav>
    );
}

export default Menu; //Pra poder usar ele em outros lugares

// as="a" => Button tá se comportando como uma tag a