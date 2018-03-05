import React from 'react'
import cNames from 'classnames'

import '../styles/Test.css'

import Common from './Common'

class Hello extends React.Component {
  constructor() {
    super()

    this.a = 'from hello'
    this.state = {
      show: false
    }
  }

  render() {
    const { show } = this.state

    return (
      <div>
        <span className="test__text">Test Text</span>
        <Common />
        <button onClick={() => {
          this.setState({
            show: !show
          })
        }}>click</button>
        <div className={cNames('showMe', {'show': show})}>show me</div>
      </div>
    )
  }
}

export default Hello