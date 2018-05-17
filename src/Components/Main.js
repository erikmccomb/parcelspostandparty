import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import Partners from '../Pages/Partners'
import Shipping from '../Pages/Shipping'
import About from '../Pages/About'

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
