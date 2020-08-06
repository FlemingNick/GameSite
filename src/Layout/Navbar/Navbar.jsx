import React from 'react';
import './Navbar.modules.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='NavBar'>
            <ul className='NavElements'>
                <li className='NavElement'><Link to='/'>Home</Link></li>
                <li className='NavElement'><Link to='/about'>About the Game</Link></li>
                <li className='NavElement'><Link to='/team'>About Us</Link></li>
                <li className='NavElement'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;