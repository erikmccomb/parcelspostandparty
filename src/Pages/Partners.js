import React from 'react'
import Flexbox from 'flexbox-react'
import streetview from '../Images/background/streetview.jpg';
import { Icon, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Partners extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        Partners Component
      </Flexbox>
    )
  }
}

const styles= {
  mailTable: {
    color: 'white',
    width: '80vw',
    maxWidth:'620px',
    borderSpacing: '10px',
    border: '0px',
    alignItems: 'center',
  },
}
export default Partners