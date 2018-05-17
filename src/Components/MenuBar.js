import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Flexbox from 'flexbox-react'
import pplogonotag from '../Images/Logos/pplogonotag.png'

class Menubar extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='row' style={styles.barAlign}>
        
        <Flexbox style={styles.barButton}>
          <Link to='Store' style={{color: 'black'}} >
            Store
          </Link>
        </Flexbox>

        <Flexbox style={styles.barButton}>
          <Link to='Partners' style={{color: 'black'}} >
            Fine Art
          </Link> 
        </Flexbox>

        <Flexbox style={{padding: '0vw 2vw 0vw 2vw'}}>
          <Link to='/' style={{color: 'black'}} >
            <Image src={pplogonotag} style={{maxHeight: '45px'}} />
          </Link>
        </Flexbox>

        <Flexbox style={styles.barButton}>
          <Link to='Shipping' style={{color: 'black'}} >
            Shipping
          </Link>
        </Flexbox>

        <Flexbox style={styles.barButton}>
          <Link to='About' style={{color: 'black'}} >
            About
          </Link>
        </Flexbox>
        
      </Flexbox>
    )
  }
}

const styles = {
  barAlign: {
    width: '100vw',
    maxWidth: '100vw',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderBottom: '1px solid #09A7E7',
  },
  barButton: {
    fontFamily: 'Baskerville', 
    fontSize: '16px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    width:'auto'
  },
}

export default Menubar