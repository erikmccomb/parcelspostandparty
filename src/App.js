import React, { Component } from 'react'
import Flexbox from 'flexbox-react'
import DesktopSwitch from './Desktop/DesktopSwitch'
import DesktopMenuBar from './Desktop/Components/DesktopMenuBar'

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
    const isMobile = width <= 820;
  
    if (isMobile) {
      return (
        <div>
          <Flexbox flexDirection='column' minHeight='100vh'>
            <Flexbox style={{width: '100vw'}}>
              Main App
            </Flexbox>
            <Flexbox flexGrow={1}>
              Menu Bar
            </Flexbox>
          </Flexbox>
        </div>
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
