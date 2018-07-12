import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'

import Flexbox from 'flexbox-react'
import pplogonotag from '../../Images/Logos/pplogonotag.png'

class DesktopMenuBar extends React.Component {

// Handling state changes for the menubar indicator
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    // State set for menubar indicator
    const { activeItem } = this.state

    return(
      <Flexbox flexDirection='column'>
        <Flexbox flexDirection='row' style={styles.barAlign}>
          <Menu pointing secondary>

            <Menu.Item 
              name='Services' 
              active={activeItem === 'Services'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw', fontSize: '15px', }}
            >
              <Link to='Services' style={{color: 'black'}} >
                Services
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='FAQ' 
              active={activeItem === 'FAQ'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw', fontSize: '15px', }}
            >
              <Link to='Faq' style={{color: 'black'}} >
                FAQ
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick} 
              tyle={{fontFamily: 'Baskerville', padding:'6px', fontSize: '15px',}}
            >
              <Link to='/' style={{color: 'black'}} >
                <Image src={pplogonotag} style={{height: '25px'}} />
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='About' 
              active={activeItem === 'About'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw', fontSize: '15px', }}
            >
              <Link to='About' style={{color: 'black'}} >
                About
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='Partners' 
              active={activeItem === 'Partners'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw', fontSize: '15px',}}
            >
              <Link to='Partners' style={{color: 'black'}} >
                Partners
              </Link> 
            </Menu.Item>

          </Menu>
        </Flexbox>
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

export default DesktopMenuBar