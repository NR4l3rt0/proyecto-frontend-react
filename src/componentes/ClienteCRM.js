import React, {Component} from 'react';

import ProductoListaFiltradaCliente from './ProductoListaFiltradaCliente';
import PedidoClienteSaludo from './PedidoClienteSaludo';
import PedidoClienteFormulario from './PedidoClienteFormulario';

/**
 * Esta clase se plantea como una fuente principal de análisis.
 * Se debe mejorar la relación con Hibernate para que se produzca un enlace 
 * natural con los pedidos.
 * Otra opción sería realizar una vista desde la BBDD (PostgreSQL en este caso)
 */
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

        // Aunque el proyecto es una SPA, se deja junto por simplicidad expositiva
        return (

            <div>
                <PedidoClienteSaludo nombre= {nombre} />
                <ProductoListaFiltradaCliente />
                <PedidoClienteFormulario nroSocio = {nroSocio} email= {email}/>
            </div>
    

        );
    };
}



