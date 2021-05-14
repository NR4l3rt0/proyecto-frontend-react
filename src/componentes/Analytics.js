import React from 'react';
import GraficoSalarioEmp from './GraficoSalarioEmp';
import GraficoPieGenero from './GraficoPieGenero';

/**
 * Se encarga de cargar los dos gráficos y pasarlo a 'App', que es enviado a 'index.js'.
 * Digamos que sería el 'cuadro' de ellos.
 */
export default function Analytics() {

    const estiloCabecera = {
        fontSize: "2rem",
        color: "black",
        margin: "auto"
        
    }

    return (
        <div>   
            <h1 style={estiloCabecera}>
                Gráfico comparativo del nivel salarial según empleado
                <br />
                <GraficoSalarioEmp />
            </h1>
            <br />
            <h1 style={estiloCabecera}>
                <br />
                Análisis representativo proporción según el género
                <GraficoPieGenero />
            </h1>
        </div>

    );

}



