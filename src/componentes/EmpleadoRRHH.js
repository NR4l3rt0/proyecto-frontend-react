import React, {Component} from 'react';
import axios from 'axios';

export default class EmpleadoRRHH extends Component {

    constructor(props){
        super(props);
        this.state = {
            empleados : [], 
            clientes : []                
        };
    }
    
    componentDidMount() {
        this.findAllEmpleados();
        this.findAllClientes();
        console.log(this.state.empleados);
        console.log(this.state.clientes);
    }

    componentDidUpdate() {
        this.findAllEmpleados();
        this.findAllClientes();
    }

    findAllEmpleados(){
        axios.get("http://localhost:8081/rrhh/empleados")
             .then(response => response.data)
             .then(data => {
                 this.setState({empleados : data});
             });
             
    };

    findAllClientes(){
        axios.get("http://localhost:8081/crm/clientes")
             .then(response => response.data)
             .then(data => {
                 this.setState({clientes : data});
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


