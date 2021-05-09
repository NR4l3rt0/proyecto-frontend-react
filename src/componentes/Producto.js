import React from 'react';
import ProductoCRUD from './ProductoCRUD';
import ProductoLista from './ProductoLista';




export default function Producto() {
    const margin = {
        margin: "1rem"
    }
    


    return (
        <container>
            <ProductoLista />
            <ProductoCRUD />
        </container>
    );

}



