import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Faq from './Pages/Faq'
import Partners from './Pages/Partners'
import About from './Pages/About'
import Services from './Pages/Services'

const DesktopSwitch = () => (
  <main>
    <Switch>

    {/* MenuBar Selections */}
      <Route exact path='/' component={Home} />
      <Route path='/FAQ' component={Faq} />
      <Route path='/Partners' component={Partners} />
      <Route path='/About' component={About} />
      <Route path='/Services' component={Services} />
    </Switch>
  </main>
)

export default DesktopSwitch
