import React, {Component} from 'react';

import { Card, Form, Button, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

export default class ProductoCRUD extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre : '',
            categoria : '',
            proveedor : '',
            fecha_caducidad : '',
            cantidad : '',
            precio : ''
        };
        this.productoChange = this.productoChange.bind(this);
        this.submitProducto = this.submitProducto.bind(this);
    }


    submitProducto(event){
        alert('nombre: ' + this.state.nombre +
                ', categoria: ' + this.state.categoria +
                ', proveedor ' + this.state.proveedor +
                ', fecha_caducidad ' + this.state.fecha_caducidad +
                ', cantidad ' + this.state.cantidad +
                ', precio ' + this.state.precio);
        event.preventDefault();
    };

    productoChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    render(){


        return (

            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Añadir/Editar productos</Card.Header>
                
               <Form onSubmit={this.submitProducto} id="formularioProductoId">
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required
                                type="text" name="nombre"
                                value={this.state.nombre}
                                onChange={this.productoChange}
                                placeholder="Introduzca el nombre del producto" 
                                className={"text-primary"}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCategoria">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control required
                                type="text" name="categoria"
                                value={this.state.categoria}
                                onChange={this.productoChange}
                                placeholder="Introduzca la categoría del producto" 
                                className= {"text-primary"}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridProveedor">
                            <Form.Label>Proveedor</Form.Label>
                            <Form.Control required
                                type="text" name="proveedor"
                                value={this.state.proveedor}
                                onChange={this.productoChange}
                                placeholder="Introduzca el nombre del proveedor" 
                                className= {"text-primary"}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFechaCaducidad">
                            <Form.Label>Fecha caducidad</Form.Label>
                            <Form.Control required
                                type="text" name="fecha_caducidad"
                                value={this.state.fecha_caducidad}
                                onChange={this.productoChange}
                                placeholder="Introduzca la fecha de caducidad del producto" 
                                className= {"text-primary"}/>
                                <Form.Text className="text-muted">
                                Recuerde que el formato de fecha es YYYY-MM-DD
                                </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCantidad">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control required
                                type="text"  name="cantidad_producto"
                                value={this.state.cantidad_producto}
                                onChange={this.productoChange}
                                placeholder="Introduzca la cantidad de unidades, en números" 
                                className= {"text-primary"}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control required
                                type="text"  name="precio"
                                value={this.state.precio}
                                onChange={this.productoChange}
                                placeholder="Introduzca la precio del producto (separador de punto)" 
                                className= {"text-primary"}/>
                        </Form.Group>
                    </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign" : "right"}}>
                    <Button size= "sm" variant="success" type="submit">
                    <FontAwesomeIcon icon={faSave} />   Guardar
                        </Button>
                    </Card.Footer>
                </Form> 
            </Card>

        );

    }


}
