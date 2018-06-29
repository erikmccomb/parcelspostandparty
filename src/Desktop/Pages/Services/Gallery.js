import React from 'react'
import Flexbox from 'flexbox-react'

class Gallery extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        Gallery Component
      </Flexbox>
    )
  }
}

export default Gallery