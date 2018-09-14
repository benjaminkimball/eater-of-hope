import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configure-store'

import App from './components/app'

const store = configureStore(window.__INITIAL_STATE__)

delete window.__INITIAL_STATE__

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
