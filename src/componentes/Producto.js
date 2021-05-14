import React, {Component} from 'react';
import ProductoCRUD from './ProductoCRUD';
import ProductoLista from './ProductoLista';



// Simplemente sirve de enlace entre la lista de productos y el formulario. Da como resultado 
// una página con dos componentes.

export default class Producto extends Component {

    render(){
 // mejorar usando flexbox

        return (
            <div>
                <br />
                <ProductoLista />
                <br />
                <ProductoCRUD />
                <br />
            </div>
        );
    }
}



