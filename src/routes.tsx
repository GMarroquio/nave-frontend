import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from 'pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      {/* <Route path='/' exact component={Home} /> */}
    </BrowserRouter>
  );
};

export default Routes;
