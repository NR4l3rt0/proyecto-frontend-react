import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class BarraNavegacion extends Component {

    render(){


        return(
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">

                <Link to={""} className="navbar-brand">
                
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Jupiter_gany.jpg" width="25" height="25" alt="imagen empresa planeta jupiter"/> 
                    <i> Jubiter </i>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Link to={"area-cliente"} className="text-light"> || Área cliente |</Link>
                    <Link to={"productos"} className="text-light "> | Productos | </Link>
                    <Link to={"empleados"} className="text-light"> | Empleados |</Link>
                    <Link to={"analytics"} className="text-light"> | Analytics ||</Link>
                </Nav>
                <Nav>
                    <Link to={"auth"} className="text-light"> || Log in/Sign in ||</Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
            );
    }
}






