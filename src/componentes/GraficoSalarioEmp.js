import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

/**
 * Renderiza un gráfico tipo barras con la información existente en la base
 * de datos. De ser modificada se verá afectado el gráfico.
 * También permitiría una entrada negativa y podrían aumentarse las variables.
 */
export default class GraficoSalarioEmp extends Component {

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
        axios.get("https://jubiter.herokuapp.com/rrhh/empleados")
             .then(response => response.data)
             .then(data => {
                 this.setState({empleados : data});
             });
    };


    render(){

        // Se extraen los arrays necesarios manipulados
        const {empleados} = this.state;
        const infoEmpleado = empleados.map(empleado => empleado.nroEmpleado + " " + empleado.nombre);
        const salario = empleados.map(empleado => empleado.salario);



        return (
            <div>

                <Bar 
                    data = {{
                        labels: infoEmpleado ,
                        datasets:  [{
                                label: 'Salario',
                                data:  salario,
                                backgroundColor: 'rgba(220,150,50,0.8)',
                            
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