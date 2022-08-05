import RouterNavigator from '../utils/RouterNavigator.js'
import { Provider } from 'react-redux'
import store from '../redux/store.js'

export default function App() 
{  
    return (
        <Provider store={store}>
            <div className="cl_application">
                <RouterNavigator store={store} />
            </div>
        </Provider>
    )
}