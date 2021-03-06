import React, {Component} from 'react';

import { Card, Form, Button, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
import ToastMensaje from './ToastMensaje';
import axios from 'axios';

/**
 * Acompaña en funcionalidad a ProductoLista, aquí se permite crear un producto que será renderizado
 * al momento (y modificado allá donde esté si aquello tiene la opción de actualizarse).
 * Hay que prestar especial atención al enlace (BINDING) entre MÉTODOS y los EVENTOS.
 */
export default class ProductoCRUD extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;                                // controla el estado del toast
        this.productoChange = this.productoChange.bind(this);
        this.submitProducto = this.submitProducto.bind(this);
    };

    // limpia la forma en la que las partes forman el estado inicial
    initialState = {
        idProducto : '',
        nombre : '',
        categoria : '',
        proveedor : '',
        fechaCaducidad : '',
        cantidad : '',
        precio : ''
    };

    // llama al estado inicial
    resetProducto = () =>{
        this.setState(() => this.initialState);
    };

    // Ayudado del objeto event, hace que no se recargue la página automáticamente al enviar
    // el formulario. Establece el estado de cada propiedad a ser enviada.
    submitProducto = event => {
        event.preventDefault();

        // crea un objeto json 'producto', resultado del formulario para el POST
        const producto = {
            id: this.state.idProducto,
            nombre: this.state.nombre,
             categoria: this.state.categoria,
             proveedor:  this.state.proveedor,
             fechaCaducidad:  this.state.fechaCaducidad,
             cantidad:  this.state.cantidad,
             precio:  this.state.precio
        };



        
        /*
         * Envía un mensaje, y en la respuesta establece el valor del estado del mensaje Toast
         * Si apareciera, se oculta el mensaje automáticamente a los 3 segundos
         */
        axios.post("https://jubiter.herokuapp.com/stock/productos", producto)
                .then(response => {
                    if(response.data != null) {
                        this.setState({"show": true});
                        setTimeout(() => this.setState({"show": false}), 3000);
                    } else{
                        this.setState({"show": false});
                    }
                });
                this.setState(this.initialState);
    };

    productoChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    render(){
        // limpia el código, evitando tener que repetir el prefijo 'this.state' a cada prop
        const {nombre, categoria, proveedor, fechaCaducidad, cantidad, precio} = this.state;

        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <ToastMensaje show = {this.state.show} message = {"Producto guardado correctamente."} type = {"success"}/>
                </div>
                
            

                <Card className="border border-dark bg-dark text-white">
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Añadir/Editar productos</Card.Header>
                    
                <Form onSubmit={this.submitProducto} onReset={this.resetProducto} id="formularioProductoId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="nombre"
                                    value={nombre}
                                    onChange={this.productoChange}
                                    placeholder="Introduzca el nombre del producto" 
                                    className={"text-primary"}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCategoria">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="categoria"
                                    value={categoria}
                                    onChange={this.productoChange}
                                    placeholder="Introduzca la categoría del producto" 
                                    className= {"text-primary"}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridProveedor">
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="proveedor"
                                    value={proveedor}
                                    onChange={this.productoChange}
                                    placeholder="Introduzca el nombre del proveedor" 
                                    className= {"text-primary"}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFechaCaducidad">
                                <Form.Label>Fecha caducidad</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="fechaCaducidad"
                                    value={fechaCaducidad}
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
                                <Form.Control required autoComplete="off"
                                    type="text"  name="cantidad"
                                    value={cantidad}
                                    onChange={this.productoChange}
                                    placeholder="Introduzca la cantidad de unidades, en números" 
                                    className= {"text-primary"}/>
                                    <Form.Text className="text-muted">
                                        Recuerde que debe ser un número, no letras.
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text"  name="precio"
                                    value={precio}
                                    onChange={this.productoChange}
                                    placeholder="Introduzca la precio del producto (separador de punto)" 
                                    className= {"text-primary"}/>
                                    <Form.Text className="text-muted">
                                        Recuerde que debe ser un número (decimal o entero), no letras.
                                    </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign" : "right"}}>
                        <Button size= "sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} />   Guardar
                        </Button> {' '}
                        <Button size= "sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} />   Reset
                        </Button>
                        </Card.Footer>
                    </Form> 
                </Card>
            </div>

        );

    }


}
