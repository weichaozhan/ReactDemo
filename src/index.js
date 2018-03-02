import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './component/Hello'
import Test from './component/Test'

ReactDOM.render(
  <div>
    <Hello />
    <Test />
  </div>,
  document.querySelector('#app')
);
