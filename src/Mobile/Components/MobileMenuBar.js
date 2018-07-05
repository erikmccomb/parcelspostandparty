import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'

import Flexbox from 'flexbox-react'
import pplogonotag from '../../Images/Logos/pplogonotag.png'

class MobileMenuBar extends React.Component {

// Handling state changes for the menubar indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    // State set for menubar indicator
    const { activeItem } = this.state

    return(
      <Flexbox flexDirection='row' style={styles.barAlign}>
        <Menu pointing secondary>

          <Menu.Item 
            name='Services' 
            active={activeItem === 'Services'} 
            onClick={this.handleItemClick} 
            style={styles.barButton}
          >
            <Link to='Services' style={{color: 'black'}} >
            Services
            </Link>
          </Menu.Item>

          <Menu.Item 
            name='FAQ' 
            active={activeItem === 'FAQ'} 
            onClick={this.handleItemClick} 
            style={styles.barButton}
          >
            <Link to='Faq' style={{color: 'black'}} >
              FAQ
            </Link>
          </Menu.Item>

          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
            style={styles.barButton}
          >
            <Link to='/' style={{color: 'black', padding:'0px'}} >
              <Image src={pplogonotag} />
            </Link>
          </Menu.Item>

          <Menu.Item 
            name='About' 
            active={activeItem === 'About'} 
            onClick={this.handleItemClick} 
            style={styles.barButton}
          >
            <Link to='About' style={{color: 'black'}} >
              About
            </Link>
          </Menu.Item>

          <Menu.Item 
            name='Partners' 
            active={activeItem === 'Partners'} 
            onClick={this.handleItemClick} 
            style={styles.barButton}
          >
            <Link to='Partners' style={{color: 'black'}} >
              Partners
            </Link> 
          </Menu.Item>

        </Menu>
      </Flexbox>
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
    borderTop: '2px solid #09A7E7',
  },
  barButton: {
    fontFamily: 'Baskerville', 
    padding:'10px',
    fontSize: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    width:'20%'
  },
}

export default MobileMenuBar