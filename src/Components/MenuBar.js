import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu, Segment, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Flexbox from 'flexbox-react'
import pplogonotag from '../Images/Logos/pplogonotag.png'

class Menubar extends React.Component {

  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return(
      <Flexbox flexDirection='column'>
        <Flexbox flexDirection='row' style={styles.barAlign}>
          <Menu pointing secondary>

            <Dropdown text='Services' pointing className='link item' style={{fontFamily: 'Baskerville', alignItems: 'center', justifyContent: 'center', }}>
              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link to='Shipping' style={{color: 'black'}} >
                    Shipping
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to='Shipping' style={{color: 'black'}} >
                    Shipping
                  </Link>
                </Dropdown.Item>
                
                <Dropdown.Item>
                  <Link to='Shipping' style={{color: 'black'}} >
                    Shipping
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} style={{fontFamily: 'Baskerville', }}>
              <Link to='Faq' style={{color: 'black'}} >
                FAQ
              </Link>
            </Menu.Item>

            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} style={{fontFamily: 'Baskerville', padding:'6px'}}>
              <Link to='/' style={{color: 'black'}} >
                <Image src={pplogonotag} style={{maxHeight: '35px'}} />
              </Link>
            </Menu.Item>

            <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} style={{fontFamily: 'Baskerville', }}>
              <Link to='About' style={{color: 'black'}} >
                About
              </Link>
            </Menu.Item>

            <Menu.Item name='Partners' active={activeItem === 'Partners'} onClick={this.handleItemClick} style={{fontFamily: 'Baskerville', }}>
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