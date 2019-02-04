import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BeerPage from './BeerPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import Cart from './CartPage'
function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/home" component={BeerPage} />
        <Route exact path="/favorite" component={FavoritePage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default Routes;
