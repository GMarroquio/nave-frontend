import React from 'react';
import Routes from './routes/index';
import GlobalStyles from 'styles/global';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UserContextProvider } from 'context/user';

function App() {
  const history = createBrowserHistory();

  return (
    <UserContextProvider>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </UserContextProvider>
  );
}

export default App;
