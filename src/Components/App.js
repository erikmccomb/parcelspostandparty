import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Flexbox from 'flexbox-react'
import Contact from './Contact'
import MenuBar from './MenuBar'


class App extends Component {
  render() {
    return (
      <Flexbox flexDirection='column' style={styles.AppWindow}>

        <Flexbox flexDirection='column'>
          <MenuBar/>
        </Flexbox>

        <Flexbox style={styles.pageBox} flexGrow={1}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Contact} />
            </Switch>
          </BrowserRouter>
        </Flexbox>
        

      </Flexbox>
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
