import { Router, Route, Switch } from 'react-router-dom'
import { history } from '../redux/store.js'

import '../styles/utils.css'

import Splash from '../pages/Splash';
import Chat from '../pages/Chat';

const RouterNavigator = (props) => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact><Splash /></Route>
            <Route path="/chat"><Chat /></Route>
            <Route path="/ad" exact>ad</Route>
            <Route><p>404 not found</p></Route>
        </Switch>
    </Router>   
)


export default RouterNavigator;