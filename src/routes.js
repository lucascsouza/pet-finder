import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './components/RoutesWithLayout';

import Login from './pages/Login';
import User from './pages/User/UserCreate';
import {
  IndexPet,
  CreatePet,
  EditPet,
  ShowPet,
  IndexUserPet,
} from './pages/Pet';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={User} exact />
        <Route path="/pets" component={IndexPet} exact />
        <Route path="/pets/create" component={CreatePet} exact isPrivate />
        <Route path="/pets/edit/:id" component={EditPet} exact isPrivate />
        <Route path="/pets/show/:id" component={ShowPet} exact isPrivate />
        <Route path="/user/pets" component={IndexUserPet} exact isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
