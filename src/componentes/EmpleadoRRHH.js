import React, {Component} from 'react';
import axios from 'axios';

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
                   {this.state.empleados.map(empleado => (<li>{empleado.hobby}</li>))}
                 </ul>



                </div>

        );
    }
}


