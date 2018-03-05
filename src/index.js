import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import Index from './component/Index'

ReactDOM.render(
  <HashRouter>
    <Index />
  </HashRouter>,
  document.querySelector('#app')
);
