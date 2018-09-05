import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

export const Grid = ({ children }) =>
  <div className='o-grid'>{children}</div>

Grid.propTypes = { children: PropTypes.node }

export default Grid
