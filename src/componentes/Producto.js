import React, {Component} from 'react';
import ProductoCRUD from './ProductoCRUD';
import ProductoLista from './ProductoLista';




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



