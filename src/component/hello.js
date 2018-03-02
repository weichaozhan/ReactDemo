import React from 'react'
import { Component } from 'react'

import '../styles/Hello.css'

import Common from './Common'

class Hello extends Component {
  constructor() {
    super()

    this.a = 'from hello'
  }

  render() {

    return (
      <div>
        <span>Hello World change</span>
        <Common />
      </div>
    )
  }
}

export default Hello