import React from 'react'
import cNames from 'classnames'

import '../styles/Test.css'

import Common from './Common'

class Hello extends React.Component {
  constructor() {
    super()

    this.a = 'from hello'
    this.timer = null
    this.state = {
      show: false,
      count: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: ++this.state.count
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { show, count } = this.state

    return (
      <div>
        <div>计数： {count}</div>
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