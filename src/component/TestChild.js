import React from 'react'

class TestChild extends React.Component {
  constructor() {
    super()

    this.state = {
      number: ''
    }
  }

  componentDidMount() {
    this.setState({
      number: this.props.match.params.number
    })
  }

  render() {
    return (
      <div>
        Come From TestChild {this.state.number}
      </div>
    )
  }
}

export default TestChild