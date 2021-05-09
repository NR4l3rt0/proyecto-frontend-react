import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

export default class ProductoLista extends Component {

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
                            <th>Categoría</th>
                            <th>Proveedor</th>
                            <th>Fecha caducidad</th>
                            <th>Cantidad producto</th>
                            <th>Precio unidad (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td colSpan="7" className="text-center">Productos no disponibles</td>
                            </tr>
                        </tbody>
                    </Table>  
                </Card.Body>
            </Card>

        );

    }


}
