import React from 'react';
import './Modal.css'

export default class Modal extends React.Component{
    state = {
        isOpen: false
    }

    render(){
        return(
            <React.Fragment>
                <button className="btn btn-primary" onClick={() => this.setState({isOpen: true})}>Open Modal</button>
                {this.state.isOpen && (
                    <div className='modal modal-uq'>
                        <div className='modal-body-uq'>
                        <h1>Modal title</h1>
                        <p>I am awesome modal!</p>
                        <button onClick={() => this.setState({ isOpen: false })}>
                            Close modal
                        </button>
                        </div>
                    </div>)}
            </React.Fragment>
        );
    }
} 
