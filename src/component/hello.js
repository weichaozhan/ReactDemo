import React from 'react'

import '../styles/Hello.css'

import Common from './Common'

class Hello extends React.Component {
  constructor() {
    super()

    this.a = 'from hello'
  }

  render() {

    return (
      <div>
        <span>Hello World change</span>
        <Common testProps="testProps from Hello" />
      </div>
    )
  }
}

export default Hello