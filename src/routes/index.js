import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../Search';
import Results from '../Results';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
);
