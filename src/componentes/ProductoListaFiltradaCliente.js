import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

export default class ProductoListaFiltradaCliente extends Component {

    constructor(props){
        super(props);
        this.state = {
            productos : []                
        };
    }

    componentDidMount() {
        this.findAllProductos();

    }

    componentDidUpdate(){
        this.findAllProductos();
    }

   findAllProductos(){
        axios.get("http://localhost:8081/stock/productos")
             .then(response => response.data)
             .then(data => {
                 this.setState({productos : data});
             });
    };


    render(){

        return (
  
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faList} /> Lista de productos</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="light" responsive="sm">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cantidad producto</th>
                            <th>Precio unidad (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.productos.length === 0 ?
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No existen productos disponibles.
                                    </td>
                                </tr>
                                :
                                this.state.productos.map((producto) => (
                                    <tr key={producto.idProducto}>
                                        <td>{producto.idProducto}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.cantidad}</td>
                                        <td>{producto.precio}</td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </Table>  
                </Card.Body>
            </Card>
        );

    }


}
