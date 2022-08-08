import chatScriptSlice from '../redux/rootReducer.js'
import { createStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const createRootReducer = (historyState) => combineReducers(
    {
        router: connectRouter(historyState),
        chatScript: chatScriptSlice
    }
)

export const history = createBrowserHistory()

export default function completeStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                createLogger(),
                
            ),
        ),
    )

    return store
}