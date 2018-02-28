import React from 'react'
import { Component } from 'react'

class Hello extends Component {
  constructor() {
    super()

    this.a = 'from hello'
  }

  render() {
    console.log(this.a)
    return (
      <div>
        <span>Hello World</span>
      </div>
    )
  }
}

export default Hello