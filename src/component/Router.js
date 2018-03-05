import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Test from './Test'
import Hello from './Hello'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/test' component={Test}/>
      <Route path='/hello' component={Hello}/>
    </Switch>
  </div>
)

export default Router