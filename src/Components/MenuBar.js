import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu, Dropdown } from 'semantic-ui-react'

import Flexbox from 'flexbox-react'
import pplogonotag from '../Images/Logos/pplogonotag.png'

class Menubar extends React.Component {

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

            <Dropdown name='Services' text='Services' pointing className='link item' style={{fontFamily: 'Baskerville', alignItems: 'center', justifyContent: 'center', padding:'12px 2vw 12px 2vw' }} >
              <Dropdown.Menu style={{border: '2px solid #09A7E7'}} >

                <Dropdown.Item>
                  <Link to='MailAndPackages' style={{color: 'black'}} >
                    Mail & Packages
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to='Shipping' style={{color: 'black'}} >
                    Shipping
                  </Link>
                </Dropdown.Item>
                
                <Dropdown.Item>
                  <Link to='Hotshot' style={{color: 'black'}} >
                    HotShot Freight
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to='Gallery' style={{color: 'black'}} >
                    Gallery Shipping
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item 
              name='FAQ' 
              active={activeItem === 'FAQ'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw' }}
            >
              <Link to='Faq' style={{color: 'black'}} >
                FAQ
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick} 
              tyle={{fontFamily: 'Baskerville', padding:'6px'}}
            >
              <Link to='/' style={{color: 'black'}} >
                <Image src={pplogonotag} style={{maxHeight: '35px'}} />
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='About' 
              active={activeItem === 'About'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw' }}
            >
              <Link to='About' style={{color: 'black'}} >
                About
              </Link>
            </Menu.Item>

            <Menu.Item 
              name='Partners' 
              active={activeItem === 'Partners'} 
              onClick={this.handleItemClick} 
              style={{fontFamily: 'Baskerville', padding:'12px 2vw 12px 2vw'}}
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