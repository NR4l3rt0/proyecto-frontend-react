import React from 'react';

import {Jumbotron, Container} from 'react-bootstrap';
import HacerPedido from './HacerPedido';
import Lista from './Lista';


export default function ClienteCRM() {
    const efectosJumbo = {
        margin: "1rem",
        textAlign: "center", 
        borderRadius: "2rem 7rem"
    }



    return (

     <Jumbotron className="bg-muted text-primary" style={efectosJumbo} fluid>
                    <Container >
                        <h1><i>¡Nos alegramos de verle de nuevo!</i></h1>
                    </Container>
                </Jumbotron>  

    );

}



