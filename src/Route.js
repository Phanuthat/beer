import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import RegisterPage from './containers/RegisterPage';
import Checkout from './containers/Checkout'
function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={MainPage} />
      </Switch>
    </div>
  );
}

export default Routes;
