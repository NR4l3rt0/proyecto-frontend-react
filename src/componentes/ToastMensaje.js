import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';

/**
 * El cometido de esta clase es proporcionar información al usuario acerca del estado de la acción
 * que ha llevado a cabo: cuando se elimina un producto o se hace un pedido.
 */
export default class ToastMensaje extends Component {

    render(){

        // No es la mejor práctica, pero se utiliza para añadir estilos como una variable.
       const estilosMsg = {
            position: 'fixed',
            top: '0.5rem',
            right: '0.5rem',
            zIndex: '1'
        }

        /** Dependiendo el estado de la propiedad 'show' ocasionará un mensaje de éxito o fracaso.
         *  Se puede comprobar que se ha apoyado de clases definidas en react-bootstrap
         */
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

