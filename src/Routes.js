import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewUser from './pages/NewUser'
import EditUser from './pages/EditUser'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novo_usuario" component={NewUser} />
        <Route path="/editar_usuario/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
