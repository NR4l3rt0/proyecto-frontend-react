import React, {Component} from 'react';

import ProductoListaFiltradaCliente from './ProductoListaFiltradaCliente';
import PedidoClienteSaludo from './PedidoClienteSaludo';
import PedidoClienteFormulario from './PedidoClienteFormulario';


export default class ClienteCRM extends Component {

    constructor(props){
        super(props);
        this.setState = this.initialState;
    }



    // Este código puede ser reutilizado ya que se pasa al hijo descendentemente
    initialState = {
        nroSocio : 7,
        nombre : "Miguel",
        email : "cervantes@hotmail.com"
    }



    render(){

        const {nroSocio, nombre, email} = this.initialState;

        return (

            <div>
                <PedidoClienteSaludo nombre= {nombre} />
                <ProductoListaFiltradaCliente />
                <PedidoClienteFormulario nroSocio = {nroSocio} email= {email}/>
    
            </div>
    

        );
    };
}



