import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configure-store'

const store = configureStore(window.__INITIAL_STATE__)

// NOTE: We have a copy in the store, let the original get garbage collected
delete window.__INITIAL_STATE__

class App extends Component {
  render () {
    return <h1>Hey.</h1>
  }
}

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
