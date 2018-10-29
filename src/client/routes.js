import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const NotFoundPage = lazy(() => import('./components/not-found-page'))

const Routes = () => <Route component={NotFoundPage} />

export default Routes
