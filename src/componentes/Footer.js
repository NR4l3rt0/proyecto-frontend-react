import React, {Component} from 'react';

import { Navbar, Col, Container } from 'react-bootstrap';

/**
 * Este componente expone la información que se ve en el footer en cada "página"
 * Se realiza un cálculo sencillo de alguna variable
 */
export default  class Footer extends Component {

    render(){
        const fontSize = {
            fontSize : "0.7rem"
        }
        const anho = new Date().getFullYear();
        return(
            <Navbar  bg="primary" variant="dark">
                <Container style={fontSize}>

                    <Col lg={12} className="text-center text-white">
                        
                    <div>{anho}-{anho + 5}, All Rights Reserved by Jubiter S.L.</div>
                    <div>E-mail: info@jubiter.com - C/Fundación empresa - Spain</div>
                       
                    </Col> 

                        
                </Container>

            </Navbar>
            );
    }
}


