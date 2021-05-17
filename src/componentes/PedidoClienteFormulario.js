import React, {Component} from 'react';

import { Card, Form, Button, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
import ToastMensaje from './ToastMensaje';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

/**
 * Aunque es capaz de enviar un pedido y que se registre en la BBDD, aún está incompleta según lo 
 * que se tenía previsto.
 * Se debería estudiar mejor el enlace con el cliente y cómo se podría interactuar con otras partes
 * del software.
 */
export default class PedidoClienteFormulario extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.idPedidoCliente = uuidv4();                // simula una sesión
        this.state.show = false;                              // controla el estado del toast
        this.pedidoChange = this.pedidoChange.bind(this);
        this.submitPedido = this.submitPedido.bind(this);
    };

    // limpia los campos para que vuelva al estado inicial cada propiedad
    initialState = {
        nroSocio : this.props.nroSocio,
        email : this.props.email,
        idPedidoCliente : '',
        idProducto : '',
        cantidad : '',
        productos : ''
    };



    componentDidMount() {
        this.findAllProductos();
    }

    componentDidUpdate() {
        this.findAllProductos();
    }



   findAllProductos(){
        axios.get("https://jubiter.herokuapp.com/stock/productos")
             .then(response => response.data)
             .then(data => {
                 this.setState({productos : data});
             });
    };

    // llama al estado inicial
    resetPedido = () => {
        this.setState(() => this.initialState);
    };

    submitPedido = event => {
        event.preventDefault();

        // crea un objeto json del formulario para el POST
        // HAY QUE PRESTAR ESPECIAL ATENCIÓN a que se pasan objetos dentro del objeto pedido.
        const pedido = {
            ClienteCRM : {
                nroSocio : this.state.nroSocio
            },
            email : this.state.email,
            idPedidoCliente: this.state.idPedidoCliente,
            producto : {
                idProducto : this.state.idProducto,
                cantidad:  this.state.cantidad
            }

        };



        /**
         * HTTP -> POST
         * Mensaje informativo.
         * Establece el valor del estado del mensaje Toast
         * Si apareciera, se oculta automáticamente a los 3000 milisegundos.
         * En el método post se pasa la URL con el objeto.
         */
        axios.post("https://jubiter.herokuapp.com/area-cliente/mis-pedidos", pedido)
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



    pedidoChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };


    render(){
        // limpia el código, evitando tener que repetir el prefijo 'this.state' a cada prop
        const { nroSocio, email, idPedidoCliente, idProducto, cantidad } = this.state;

        

        // Se han tratado de usar otras características con respecto al otro formulario.
        // Por ejemplo el readOnly.
        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <ToastMensaje show = {this.state.show} message = {"Pedido realizado correctamente."} type = {"success"}/>
                </div>

                <Card className="border border-dark bg-dark text-white">
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Pedir producto</Card.Header>
                    
                    <Form onSubmit={this.submitPedido} onReset={this.resetPedido} id="formularioPedidoId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNroSocio">
                                    <Form.Label>Número de socio</Form.Label>
                                    <Form.Control plaintext readOnly
                                        type="text" 
                                        defaultValue={nroSocio}
                                        className={"bg-white text-center text-primary"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control readOnly
                                        type="text" 
                                        placeholder={email}                                   
                                        className= {"text-primary text-center"}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPedidoCliente">
                                    <Form.Label>ID pedido cliente</Form.Label>
                                    <Form.Control readOnly
                                        type="text" 
                                        value={idPedidoCliente}
                                        className= {"text-primary"}/>
                                </Form.Group>
                                <Form.Group controlId="formGridIdProducto">
                                    <Form.Label>ID producto:</Form.Label>

                                    <Form.Control required autoComplete="off"
                                        type="text"  name="idProducto"
                                        value={idProducto}
                                        onChange={this.pedidoChange}
                                        placeholder="Introduzca la cantidad de unidades, en números" 
                                        className= {"text-primary"}/>
                                    <Form.Text className="text-muted">
                                        Recuerde que debe ser un número, no letras.
                                    </Form.Text>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCantidad">
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text"  name="cantidad"
                                        value={cantidad}
                                        onChange={this.pedidoChange}
                                        placeholder="Introduzca la cantidad de unidades, en números" 
                                        className= {"text-primary"}/>
                                        <Form.Text className="text-muted">
                                            Recuerde que debe ser un número, no letras.
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
