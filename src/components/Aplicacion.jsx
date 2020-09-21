import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import InsigniaPages from '../pages/InsigniaPages';
import InsigniaNueva from '../pages/InsigniaNueva';


function Aplicacion() {
  return(
<BrowserRouter>
  <Switch>
    <Route exact path='/insignia' component={InsigniaPages}/>
    <Route exact path='/insignia/new' component={InsigniaNueva}/>
  </Switch>
</BrowserRouter>
  )
}

export default Aplicacion;