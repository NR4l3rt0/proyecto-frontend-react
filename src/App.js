import React from 'react';
import './App.css';

import BarraNavegacion from './componentes/BarraNavegacion';
import Producto from './componentes/Producto';
import Home from './componentes/Home';
import ClienteCRM from './componentes/ClienteCRM';
import EmpleadoRRHH from './componentes/EmpleadoRRHH';
import Analytics from './componentes/Analytics';
import Footer from './componentes/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    
  /* Y dentro de cada uno otra vez enroutar 

  */ 
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





export default App;
