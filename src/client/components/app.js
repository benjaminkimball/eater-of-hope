import React from 'react'

import Grid from './grid'
import Layout from './layout'

export const App = () => (
  <Layout>
    <Grid>
      <h1 style={{ gridColumn: '1 / -1' }}>Hey.</h1>
    </Grid>
  </Layout>
)

export default App
