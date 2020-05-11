import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <a class="navbar-brand" href="/">TDX</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/about.html">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/contacts.html">Contacts</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;