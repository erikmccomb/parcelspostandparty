import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Faq from '../Pages/Faq'
import Partners from '../Pages/Partners'
import Services from '../Pages/Services/Services'
import About from '../Pages/About'

const ServicesMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/FAQ' component={Faq} />
      <Route path='/Partners' component={Partners} />
      <Route path='/Services' component={Services} />
      <Route path='/About' component={About} />
    </Switch>
  </main>
)

export default ServicesMain
