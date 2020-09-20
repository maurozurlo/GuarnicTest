import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound, Dashboard } from 'guarnic/components'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
