import React from 'react';

import BarraNavegacion from './componentes/BarraNavegacion';
import Producto from './componentes/Producto';
import Home from './componentes/Home';
import ClienteCRM from './componentes/ClienteCRM';
import EmpleadoRRHH from './componentes/EmpleadoRRHH';
import Analytics from './componentes/Analytics';
import Footer from './componentes/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/** 
 * Clase padre de toda la parte del frontend. 
 * Se trata de un componente funcional que se apoya en un enrutamiento de path.
 * Dependiendo de la elección que se haga en la barra de navegación, se cargará 
 * uno u otro componente.
 */ 
export default function App() {
  return (
    
    <Router>
      <BarraNavegacion sticky="top"/> 
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/area-cliente" exact component={ClienteCRM}/>
          <Route path="/productos" exact component={Producto}/>
          <Route path="/empleados" exact component={EmpleadoRRHH}/>
          <Route path="/analytics" exact component={Analytics}/>
        </Switch>
      <Footer />
    
    </Router>
  );
}