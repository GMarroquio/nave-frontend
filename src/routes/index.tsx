import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from 'pages/Login';
import Home from 'pages/Home';
import AddNaver from 'pages/AddNaver';
import EditNaver from 'pages/EditNaver';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />

      <Route path="/" exact component={Home} isPrivate />
      <Route path="/add" component={AddNaver} isPrivate />
      <Route path="/edit/:id" component={EditNaver} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
