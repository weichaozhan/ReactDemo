import React from 'react'

import '../styles/Common.css'

class Common extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="commen__text">
        Commen Component
        <h1>
          <i>{this.props.testProps || 'testProps Normal'}</i>
        </h1>
      </div>
    )
  }
}

export default Common