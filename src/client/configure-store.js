import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// NOTE: Used to enable hot reloading of the store!
let store

export default function configureStore (preloadedState) {
  if (!store) {
    store = createStore(reducers, preloadedState, composeEnhancers(
      applyMiddleware(ReduxThunk)
    ))

    return store
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store.replaceReducer(reducers)
  }

  return store
}
