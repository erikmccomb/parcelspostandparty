import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Faq from '../Pages/Faq'
import Partners from '../Pages/Partners'
import About from '../Pages/About'
import Services from '../Pages/Services/Services'
import Shipping from '../Pages/Services/Shipping'
import Mailboxes from '../Pages/Services/Mailboxes';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/FAQ' component={Faq} />
      <Route path='/Partners' component={Partners} />
      <Route path='/Services' component={Services} />
      <Route path='/About' component={About} />
      
      <Route path='/Shipping' component={Shipping} />
      <Route path='/Mailboxes' component={Mailboxes} />
    </Switch>
  </main>
)

export default Main
