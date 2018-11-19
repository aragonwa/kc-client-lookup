import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../Search';
import Results from '../Results';
import ClientDetail from '../ClientDetail';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/results" component={Results} />
      <Route path="/details" component={ClientDetail} />
    </Switch>
  </BrowserRouter>
);
