import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import rotasPrivadas from "./componentes/rotasPrivadas";
const Rotas =()=>{
    return(
        <Router>

            <Switch>
                <Route exact path="/criar" component={CrearNew}/>
            </Switch>

        </Router>
    )
}