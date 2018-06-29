import React from 'react'
import Flexbox from 'flexbox-react'

class Home extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        Home Component
      </Flexbox>
    )
  }
}

export default Home