import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

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
        const {empleados} = this.state;
        const nroEmpleado = empleados.map(empleado => empleado.nroEmpleado);
        const salario = empleados.map(empleado => empleado.salario);

        console.log("reducing");
        const hombres = empleados.filter(empleado => empleado.sexo.localeCompare('Hombre') === 0)
                                 .map(cuenta => 1)
                                 .reduce((antes, despues) => antes + despues, 0);

        const mujeres = empleados.filter(empleado => empleado.sexo.localeCompare('Mujer') === 0)
                                 .map(cuenta => 1)
                                 .reduce((antes, despues) => antes + despues, 0);
                                 

                                    
        const total = hombres + mujeres;


        
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