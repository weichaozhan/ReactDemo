import React from 'react'
import { Component } from 'react'

import '../styles/Test.css'

import Common from './Common'

class Hello extends Component {
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
        {
          show && (
            <div>show me</div>
          )
        }
      </div>
    )
  }
}

export default Hello