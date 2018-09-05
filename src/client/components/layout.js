import PropTypes from 'prop-types'
import React from 'react'

export const Layout = ({ children }) =>
  <div className='o-layout'>{children}</div>

Layout.propTypes = { children: PropTypes.node }

export default Layout
