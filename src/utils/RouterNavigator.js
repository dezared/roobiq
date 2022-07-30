import { BrowserRouter } from 'react-router-dom'

import '../styles/utils.css'

import Splash from '../pages/Splash';

const RouterNavigator = (props) => (
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/splash" element={<Splash />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BrowserRouter;