import React, {Component} from 'react';
import axios from 'axios';

/**
 * Esta clase se pretendía usar para exponer datos sensibles de los empleados,
 * para los que se accediese sólo con clave y contraseña.
 * Sin embargo, si lo pongo desde el backend, suelo tener problemas para que se 
 * lea el resto por el @CrossOrigins. 
 * Así que simplemente muestra las aficiones de los empleados.
 * Se deja sin implementar, pero se ha expuesto su dirección.
 */
export default class EmpleadoRRHH extends Component {

    constructor(props){
        super(props);
        this.state = {
            empleados : []              
        };
    }
    
    componentDidMount() {
        this.findAllEmpleados();
        

    }

   /* componentDidUpdate() {
        this.findAllEmpleados();
    }*/

    findAllEmpleados(){
        axios.get("http://localhost:8081/rrhh/empleados")
             .then(response => response.data)
             .then(data => {
                 this.setState({empleados : data});
             });
    };





    render(){

        return (

                <div>
                    <ul>
                        {this.state.empleados.map(empleado => (<li key={empleado.nroEmpleado}>{empleado.hobby}</li>))}
                    </ul>
                </div>

        );
    }
}


