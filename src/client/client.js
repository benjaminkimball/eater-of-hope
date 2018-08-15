import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Header = styled.h1`
  color: #f08;
`

class App extends Component {
  render () {
    return <Header>Hey.</Header>
  }
}

render(<App />, document.getElementById('root'))
