import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'

render((

  // HashRouter used - Static Site
  <HashRouter>
    <App />
  </HashRouter>
  
), document.getElementById('root'))