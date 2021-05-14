import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


/**
 * De forma similar al otro gráfico, también obtiene los valores desde una llamada
 * a la API, pero en este caso no sólo se obtienen los arrays con un mapeo, sino 
 * que se realiza un filtrado, un mapeo y una reducción.
 * De este modo se plantea el uso de un paradigma programación más funcional. 
 * En el mismo array se pasan funciones que calcularán dinámicamente el porcentaje. 
 */
export default class GraficoPieGenero extends Component {

    constructor(props){
        super(props);
        this.state =  {
            empleados : []
        }
    }


    componentDidMount() {
        this.findAllEmpleados();
        
    }

 

    findAllEmpleados(){
        axios.get("http://localhost:8081/rrhh/empleados")
             .then(response => response.data)
             .then(data => {
                 this.setState({empleados : data});
             });
    };


    render(){
        // declaración de variables y construcción de los arrays con el pipe.
        // Se podrían acceder o comprobar desde la consola del navegador.
        const {empleados} = this.state;

        const hombres = empleados.filter(empleado => empleado.sexo.localeCompare('Hombre') === 0)
                                 .map(cuenta => 1)
                                 .reduce((antes, despues) => antes + despues, 0);

        const mujeres = empleados.filter(empleado => empleado.sexo.localeCompare('Mujer') === 0)
                                 .map(cuenta => 1)
                                 .reduce((antes, despues) => antes + despues, 0);
                                 

                                    
        const total = hombres + mujeres;


        // Función que calcula el porcentaje
        const porcentaje = (elemento) => elemento / total * 100;



        return (
            <div>

                <Pie 
                    data = {{
                        labels: ['Hombres', 'Mujeres'],
                        datasets:  [{
                            label: 'Genero',
                            data:  [porcentaje(mujeres), 
                                    porcentaje(hombres)],
                            backgroundColor: ['red', 'blue'],
                            
                            borderColor: 
                                'rgba(100,125,250,0.8)',
                            
                            borderWidth: 6.5,
                        }],
                    }}
                    height = {400} 
                    width = {600}
                    options = {{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        );
    };
}