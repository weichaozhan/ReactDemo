import React from 'react'
import cNames from 'classnames'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../styles/Index.less'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul className={cNames('nav', {'bg-orange': this.props.subData === 'DO_TEST Test action from Hello1'})}>
          <li>
            <NavLink to="/" replace={true}>首页</NavLink>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subData: state.Base.subData
  }
}

export default connect(
  mapStateToProps
)(Index)