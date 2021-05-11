import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';

export default class ToastMensaje extends Component {

    render(){

       const estilosMsg = {
            position: 'fixed',
            top: '0.5rem',
            right: '0.5rem',
            zIndex: '1'
        }

        return (
            <div style={this.props.show ? estilosMsg : null}>
                <Toast className={`border text-white ${this.props.type === "success" ? 
                                    "border-success bg-success" :
                                    "border-danger bg-danger"}`} 
                                    show={this.props.show}>
                    <Toast.Header className={"bg-muted text-dark"} closeButton={false}>
                        <strong className="mr-auto">
                            ¡Genial!
                        </strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.message}     
                    </Toast.Body>
                </Toast>
            </div>
        );
    }
}

