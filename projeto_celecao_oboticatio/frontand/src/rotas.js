import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import rotasPrivadas from "./componentes/rotasPrivadas";
import {RevNew} from "./mypage/novorevend/novorevendedor";
import {Login2} from "./mypage/loginPage/loginPage";


const Rotas =()=>{
    return(
        <Router>

            <Switch>
                <Route exact path="/" component={Login2}/>
                <Route path="/criar" component={RevNew}/>
            </Switch>

        </Router>
    )
}

export default Rotas;