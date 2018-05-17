import React from 'react'
import Flexbox from 'flexbox-react'

class Store extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        Store Component
      </Flexbox>
    )
  }
}

export default Store