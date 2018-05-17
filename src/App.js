import React from 'react'
import Menubar from './Components/MenuBar'
import Main from './Components/Main'
import Flexbox from 'flexbox-react'

const App = () => (
  <Flexbox flexDirection='column'>
    <Flexbox style={{width: '100vw'}}>
      <Menubar />
    </Flexbox>
    <Flexbox flexGrow={1}>
      <Main />
    </Flexbox>
  </Flexbox>
)

export default App
