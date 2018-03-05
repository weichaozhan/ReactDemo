import React from 'react'
import { Component } from 'react'
import cNames from 'classnames'
import { Link } from 'react-router-dom'

import Router from './Router'

class Index extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <Router/>
      </div>
    )
  }
}

export default Index