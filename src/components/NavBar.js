import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>gpIT</h1>
            </Link>
            <ul>
                <NavLink to="/area/Playa">Playa</NavLink>
                <NavLink to="/area/Edificio">Edificio</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default NavBar;