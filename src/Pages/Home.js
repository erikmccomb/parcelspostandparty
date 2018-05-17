// React
  import React from 'react'
  import Flexbox from 'flexbox-react'
  import { Icon } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'
  import '../../src/index.css'
// Components
  import Map from '../Components/Map'
  import Schedule from '../Components/Schedule'
// Images
  import flags from '../Images/Background/flags.jpg';

class Home extends React.Component {
  render() {
    return(
      <Flexbox style={styles.homeStyle}>
        
      </Flexbox>
    )
  }
}

const styles= {
  homeStyle:{
    width: '100vw', 
    alignContent: 'center', 
    justifyContent:'center', 
    height: '100%',
    backgroundImage: `url(${flags})`,
    backgroundSize: 'cover',
    maxWidth:'100vw',
  },
  mailTable: {
    color: 'white',
    maxWidth:'630px',
    borderSpacing: '10px',
    border: '0px',
    alignItems: 'center',
    alignSelf: 'center',
  },
}
export default Home