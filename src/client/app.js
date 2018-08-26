import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled from 'styled-components'

import reducers from './reducers'

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

delete window.__INITIAL_STATE__

const Header = styled.h1`
  color: #f08;
`

class App extends Component {
  render () {
    return <Header>Hey.</Header>
  }
}

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
