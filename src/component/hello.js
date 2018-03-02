import React from 'react'
import { Component } from 'react'
import '../styles/Hello.css'

class Hello extends Component {
  constructor() {
    super()

    this.a = 'from hello'
  }

  render() {
    setTimeout(() => {
      this.a += ' change'
      console.log(this.a)
    }, 3000)

    return (
      <div>
        <span>Hello World change</span>
      </div>
    )
  }
}

export default Hello