import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Partners from './Partners'
import Shipping from './Shipping'
import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Store' component={Store} />
      <Route path='/Partners' component={Partners} />
      <Route path='/Shipping' component={Shipping} />
      <Route path='/About' component={About} />
    </Switch>
  </main>
)

export default Main
