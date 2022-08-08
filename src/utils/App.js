import RouterNavigator from '../utils/RouterNavigator.js'
import { Provider } from 'react-redux'
import completeStore, { history } from '../redux/store.js'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'

const store = completeStore()

const App = () => (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                    <div className="cl_application">
                        <RouterNavigator store={store} />
                    </div>
            </ConnectedRouter>
        </Provider>
)

App.propTypes = {
    history: PropTypes.object,
}

export default App