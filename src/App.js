import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import store from './store';
// import {Provider} from 'react-redux';

import Login from "./componentes/alumno/Login";
import Preguntas from "./componentes/alumno/Preguntas";
import Navegador from "./componentes/layout/Navegador";

function App() {
  return (
    <div>
     <BrowserRouter>
        <Navegador />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/alumno/preguntas" component={Preguntas} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

