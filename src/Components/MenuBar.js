import React from 'react'
import Flexbox from 'flexbox-react'
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import pplogonotag from '../Images/Logos/pplogonotag.png'
import { Link } from 'react-router-dom'

class Menubar extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='row' style={styles.barAlign}>

        <div style={styles.barButton}>
          <Link to='Store' style={{color: 'black'}} >
            Store
          </Link>
        </div>
        
        <div style={styles.barButton}>
          <Link to='Shipping' style={{color: 'black'}} >
            Shipping
          </Link>
        </div>

        <div >
          <Link to='/' style={{color: 'black'}} >
            <Image src={pplogonotag} style={{maxHeight: '45px'}} />
          </Link>
        </div>

        <div style={styles.barButton}>
          <Link to='Partners' style={{color: 'black'}} >
            Partners
          </Link> 
        </div>

        <div style={styles.barButton}>
          <Link to='About' style={{color: 'black'}} >
            About
          </Link>
        </div>
        
      </Flexbox>
    )
  }
}

const styles = {
  barAlign: {
    width: '100vw',
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
  },
}

export default Menubar