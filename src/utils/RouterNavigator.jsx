import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../redux/store';

import '../styles/utils.css';

import Components from '../pages/Components';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Main from '../pages/index';
import Chat from '../pages/Chat';
import ScenarioSelection from '../pages/ScenarioSelection';

function RouterNavigator() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="/login" exact><Login /></Route>
        <Route path="/registration" exact><Registration /></Route>
        <Route path="/constructor" exact><ScenarioSelection /></Route>
        <Route path="/constructor/:id" exact><Chat /></Route>
        <Route path="/ad" exact>ad</Route>
        <Route path="/components" exact><Components /></Route>
        <Route><p>404 not found</p></Route>
      </Switch>
    </Router>
  );
}

export default RouterNavigator;
