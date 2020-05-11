import React from 'react';
import './Modal.css'

export default class Modal extends React.Component{
    state = {
        isOpen: true
    }

    render(){
        return(
            <React.Fragment>
                {this.state.isOpen && (
                    <div className='modal modal-uq'>
                        <div className='modal-body-uq'>
                        <h1>List is empty</h1>
                        <p>You have no active tasks for today!</p>
                        <button className="btn btn-success" onClick={() => this.setState({ isOpen: false })}>
                            Close
                        </button>
                        </div>
                    </div>)}
            </React.Fragment>
        );
    }
} 
