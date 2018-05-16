import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Flexbox from 'flexbox-react'
import PageLayout from './PageLayout'
import MenuBar from './MenuBar'
import Home from './Home'
import Store from './Store'
import Partners from './Partners'
import Shipping from './Shipping'
import About from './About'

const history = createBrowserHistory()

const PageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <PageLayout >
        <Component {...matchProps} />
      </PageLayout>
    )} />
  )
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PageRoute exact path='/' component={Home} />
          <PageRoute path='/store' component={Store} />
          <PageRoute path='/Partners' component={Partners} />
          <PageRoute path='/Shipping' component={Shipping} />
          <PageRoute path='/About' component={About} />
        </Switch>
      </Router>
    );
  }
}

const styles = {
  AppWindow: {
    width: '100vw',
    height: '100vh',
  },
}

export default App;
