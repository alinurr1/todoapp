import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper light-blue darken-4 px5">
                <a href="/" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todos</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;