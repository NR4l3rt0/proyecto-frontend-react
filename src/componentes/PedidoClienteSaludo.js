import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

/**
 * Envía un mensaje de bienvenida al usuario en su página personal, podrá pensarse como
 * un prop que será enviado por el padre ("hacia abajo") cuando el usuario se loguee.
 */
export default class PedidoClienteSaludo extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre : this.props.nombre
        }
    }

    render(){
        const efectosJumbo = {
            margin: "1rem",
            textAlign: "center", 
            borderRadius: "2rem 7rem"
        }

        const {nombre} = this.state;

        return(
            <Jumbotron className="bg-muted text-primary" style={efectosJumbo} fluid>
            <Container >
                <h1><i>¡Nos alegramos de verte {nombre}!</i></h1>
            </Container>
        </Jumbotron> 
        );
    };
}