import React, { Component } from 'react'
import Flexbox from 'flexbox-react'
import DesktopSwitch from './Desktop/DesktopSwitch'
import DesktopMenuBar from './Desktop/Components/DesktopMenuBar'

import MobileSwitch from './Mobile/MobileSwitch'
import MobileMenuBar from './Mobile/Components/MobileMenuBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 750;
  
    if (isMobile) {
      return (
        <Flexbox flexDirection='column' minHeight='100vh'>
          <Flexbox  flexGrow={1}>
            <MobileSwitch/>
          </Flexbox>
          <Flexbox style={{width: '100vw'}}>
            <MobileMenuBar/>
          </Flexbox>
        </Flexbox>
      );
    } else {
      return (
        <Flexbox flexDirection='column' minHeight='100vh'>
          <Flexbox style={{width: '100vw'}}>
            <DesktopMenuBar/>
          </Flexbox>
          <Flexbox flexGrow={1}>
            <DesktopSwitch/>
          </Flexbox>
        </Flexbox>
      );
    }
  }
}
export default App;
