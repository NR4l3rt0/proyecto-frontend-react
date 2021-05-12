import React, {Component} from 'react';
import axios from 'axios';

export default class InfoClientes extends Component {

    constructor(props){
        super(props);
        this.state = {
            clientes : []                
        };
    }
    
    componentDidMount() {
        this.findAllClientes();

    }

    componentDidUpdate() {
        this.findAllClientes();
    }

             
 

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
                        {this.state.clientes.map(empleado => (<li>{empleado.hobby}</li>))}
                    </ul>
                </div>

        );
    }
}


