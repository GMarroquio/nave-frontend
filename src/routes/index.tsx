import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from 'pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Home</h1>} isPrivate />

      <Route path="/login" component={Login} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
