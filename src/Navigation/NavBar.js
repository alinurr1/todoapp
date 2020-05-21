import React from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                    Contacts
                </NavLink>
            </li>
            </ul>
        </nav>
        );
    }
}

export default NavBar;