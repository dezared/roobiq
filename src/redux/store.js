import chatScriptSlice from '../redux/rootReducer.js'
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'

import logger from 'redux-logger'

export default configureStore({
    reducer: {
      chatScript: chatScriptSlice
    }
  },
  applyMiddleware([ logger ])
)