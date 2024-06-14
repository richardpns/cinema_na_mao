import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navbarStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.2)'
    };

    const linkStyle = {
        color: '#FFD700',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.5em'
    };

    const activeLinkStyle = {
        fontWeight: 'bold',
        borderBottom: '2px solid #FFD700'
    };

    return (
        <nav style={navbarStyle}>
            <NavLink exact to="/" style={linkStyle} activeStyle={activeLinkStyle}>Destaques</NavLink>
            <NavLink to="/busca" style={linkStyle} activeStyle={activeLinkStyle}>Busca</NavLink>
            <NavLink to="/indicacao" style={linkStyle} activeStyle={activeLinkStyle}>Indicações</NavLink>
            <NavLink to="/contato" style={linkStyle} activeStyle={activeLinkStyle}>Contato</NavLink>
        </nav>
    );
}

export default Navbar;
