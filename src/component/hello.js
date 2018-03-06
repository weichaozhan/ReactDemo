import React from 'react'
import { connect } from 'react-redux'

import '../styles/Hello.css'

import Common from './Common'

import * as baseStore from '../store/Actions/BaseAction.js'

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.dispatchAction = this.dispatchAction.bind(this)
  }

  dispatchAction() {
    const { dispatch } = this.props

    this.setState({
      count: this.state.count + 1
    }, () => {
      dispatch(baseStore.doTest('Test action from Hello' + this.state.count))
    })
  }

  render() {
    const { subData } = this.props

    return (
      <div>
        <span>
          <button onClick={this.dispatchAction}>Hello World change</button>
        </span>
        <Common testProps="TestProps from Hello" />
        <div>{subData}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subData: state.Base.subData
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(dispatch, ownProps)
  
//   return {

//   }
// }

export default connect(
  mapStateToProps
)(Hello)