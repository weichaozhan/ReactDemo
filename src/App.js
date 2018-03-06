import React from 'react'
import { NavLink } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './store/Index.js'
import Router from './component/Router'
import Nav from './component/Nav'

const store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav />
          <div className="content-show">
            <Router/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App