import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore (preloadedState) {
  if (!window.__STORE__) {
    window.__STORE__ = createStore(reducers, preloadedState, composeEnhancers(
      applyMiddleware(ReduxThunk)
    ))

    return window.__STORE__
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    window.__STORE__.replaceReducer(reducers)
  }

  return window.__STORE__
}
