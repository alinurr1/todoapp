import React from 'react';

class Jumbotron extends React.Component{
    render(){
        return(
            <div class="jumbotron bg-light my-0">
                <h1 class="display-5">Hello, world!</h1>
                <p class="lead">This is a simple React todo application where you can add and delete your tasks.
                                Initial tasks that are displayed on your page are loaded from an external jsonplaceholder website.
                                In future I plan to add a full back-end and database support for the app.</p>
            </div>
        );
    }
}

export default Jumbotron;