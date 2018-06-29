import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu, Dropdown } from 'semantic-ui-react'

import Flexbox from 'flexbox-react'
import pplogonotag from '../../Images/Logos/pplogonotag.png'

class Mobile_MenuBar extends React.Component {
  render(){
    return(
      <div>
        hello Mobile Menu Bar
      </div>
    )
  }
}

const styles = {
  barAlign: {
    width: '100vw',
    maxWidth: '100vw',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderBottom: '2px solid #09A7E7',
  },
  barButton: {
    fontFamily: 'Baskerville', 
    fontSize: '20px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    width:'auto'
  },
}

export default Mobile_MenuBar