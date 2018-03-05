import React from 'react'
import cNames from 'classnames'
import { NavLink } from 'react-router-dom'

import '../styles/Index.less'

import Router from './Router'

class Index extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
        <ul className="nav">
          <li>
            <NavLink to="/">首页</NavLink>
          </li>
          <li>
            <NavLink to="/hello" replace={true}>Hello</NavLink>
          </li>
          <li>
            <NavLink to="/test" replace={true}>Test</NavLink>
          </li>
          <li>
            <NavLink to="/test/1" replace={true}>Test1</NavLink>
          </li>
        </ul>
        <div className="content-show">
          <Router/>
        </div>
      </div>
    )
  }
}

export default Index