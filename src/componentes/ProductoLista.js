import React, {Component} from 'react';
                    
import {Card, Table, Image, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import ToastMensaje from './ToastMensaje';
import axios from 'axios';

export default class ProductoLista extends Component {

    constructor(props){
        super(props);
        this.state = {
            productos : []                
        };
    }

    componentDidMount() {
        this.findAllProductos();
    }

    componentDidUpdate() {
        this.findAllProductos();
    }

   findAllProductos(){
        axios.get("http://localhost:8081/stock/productos")
             .then(response => response.data)
             .then(data => {
                 this.setState({productos : data});
             });
    };

    deleteProducto = (productoId) => { 
        axios.delete("http://localhost:8081/stock/productos/" + productoId)
            .then(response => {
                if(response.data != null){
                    this.setState({"show": true});
                        setTimeout(() => this.setState({"show": false}), 3000);
                    /*
                        La lógica para refrescar la lista se puede conseguir directamente con componentDidUpdate()
                        ya que el guardar, editar y eliminar va a repercutir directamente en la actualización de la lista

                        this.setState({
                        productos: this.state.productos.filter(
                            producto => producto.idProducto !== productoId
                        )
                    })*/
                } else{
                    this.setState({"show": false});
                }
            });

    };

    render(){


        return (

            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <ToastMensaje children = {{show:this.state.show, message: "Producto eliminado correctamente.", type: "danger"}}/>
                </div>         
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
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.productos.length === 0 ?
                                    <tr>
                                        <td colSpan="8" className="text-center">
                                            No existen productos disponibles.
                                        </td>
                                    </tr>
                                    :
                                    this.state.productos.map((producto,index) => (
                                        <tr key={index}>
                                            <td>{producto.idProducto}</td>
                                            <td>
                                                <Image src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_960_720.png" roundedCircle width="20" height="20" />
                                                {producto.nombre}
                                            </td>
                                            <td>{producto.categoria}</td>
                                            <td>{producto.proveedor}</td>
                                            <td>{producto.fechaCaducidad}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.precio}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button size="sm" variant= "outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
                                                    <Button size="sm" variant= "outline-danger" onClick={this.deleteProducto.bind(this, producto.idProducto)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </Table>  
                    </Card.Body>
                </Card>
            </div>
        );

    }


}
