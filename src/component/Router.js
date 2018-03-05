import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Test from './Test'
import TestChild from './TestChild'
import Hello from './Hello'

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/test" component={Test} />
      <Route path="/test/:number" component={TestChild} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </div>
)

export default Router