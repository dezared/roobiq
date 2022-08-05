import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../styles/utils.css'

import Splash from '../pages/Splash';

const RouterNavigator = ({ store }, props) => (
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/" exact element={<Splash />}></Route>
        </Routes>
    </BrowserRouter>
)

RouterNavigator.propTypes = {
    store: PropTypes.object.isRequired
  }

export default RouterNavigator;