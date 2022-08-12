import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../redux/store';

import '../styles/utils.css';

import Splash from '../pages/Splash';
import Components from '../pages/Components';

function RouterNavigator() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact><Splash /></Route>
        <Route path="/ad" exact>ad</Route>
        <Route path="/components" exact><Components /></Route>
        <Route><p>404 not found</p></Route>
      </Switch>
    </Router>
  );
}

export default RouterNavigator;
