import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

export const Layout = ({ children }) =>
  <div className='o-layout'>{children}</div>

Layout.propTypes = { children: PropTypes.node }

export default Layout
