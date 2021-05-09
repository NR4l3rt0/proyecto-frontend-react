import React from 'react';
import ProductoCRUD from './ProductoCRUD';
import ProductoLista from './ProductoLista';




export default function Producto() {

 // mejorar usando flexbox

    return (
        <container>
            <br />
            <ProductoLista />
            <br />
            <ProductoCRUD />
            <br />
        </container>
    );

}



