import React from 'react'
import Flexbox from 'flexbox-react'
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import pplogonotag from '../Images/Logos/pplogonotag.png'

class Menubar extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='row' style={styles.barAlign}>
        <div style={styles.barButton}>
          Store
        </div>
        
        <div style={styles.barButton}>
          Shipping
        </div>

        <div >
          <Image src={pplogonotag} style={{maxHeight: '30px'}} />
        </div>

        <div style={styles.barButton}>
          Partners
        </div>

        <div style={styles.barButton}>
          Contact
        </div>
        
      </Flexbox>
    )
  }
}

const styles = {
  barAlign: {
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#FFFFFF',
    color: '#09A7E7',
    borderBottom: '1px solid #09A7E7',
  },
  barButton: {
    fontFamily: 'Baskerville', 
    fontSize: '16px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Menubar