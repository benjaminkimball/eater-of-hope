import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/layout'
import Grid from './components/grid'

import Routes from './routes'

render((
  <Layout>
    <Grid>
      <Router>
        <Suspense fallback={<p>Loading&hellip;</p>}>
          <Routes />
        </Suspense>
      </Router>
    </Grid>
  </Layout>
), document.getElementById('root'))
