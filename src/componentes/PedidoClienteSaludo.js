import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


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