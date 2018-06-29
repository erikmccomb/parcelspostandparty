import React from 'react'
import { Switch, Route } from 'react-router-dom'

// MenuBar Pages
  import Home from '../Pages/Home'
  import Faq from '../Pages/Faq'
  import Partners from '../Pages/Partners'
  import About from '../Pages/About'
  
// DropDown Pages
  import Hotshot from '../Pages/Services/Hotshot'
  import Shipping from '../Pages/Services/Shipping'
  import Mailboxes from '../Pages/Services/Mailboxes'
  import Gallery from '../Pages/Services/Gallery'

const Main = () => (
  <main>
    <Switch>

    {/* MenuBar Selections */}
      <Route exact path='/' component={Home} />
      <Route path='/FAQ' component={Faq} />
      <Route path='/Partners' component={Partners} />
      <Route path='/About' component={About} />

    {/* Dropdown Selections */}
      <Route path='/Shipping' component={Shipping} />
      <Route path='/MailAndPackages' component={Mailboxes} />
      <Route path='/Hotshot' component={Hotshot} />
      <Route path='/Gallery' component={Gallery} />
    </Switch>
  </main>
)

export default Main
