import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Index from './component/Index'

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.querySelector('#app')
);
