import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import configureStore from './configure-store'

const store = configureStore(window.__INITIAL_STATE__)

// NOTE: We have a copy in the store, let the original get garbage collected
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
