import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Profile from './components/Profile';

const App = () => (
  <div className="app-root">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
