// React
  import React from 'react'
  import Flexbox from 'flexbox-react'
  import { Icon } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'
  import '../../../src/index.css'
// Components
  import Map from '../Components/Map'
  import Schedule from '../Components/Schedule'
// Images
  import flags from '../../Images/Background/flags.jpg';

class Home extends React.Component {
  render() {
    return(
      <Flexbox 
        flexDirection='column' 
        height='100%' 
        width='100vw' 
        alignItems='center' 
        justifyContent='center'
        style={styles.homeStyle}
      >
        <Flexbox flexDirection='row' width='600px' maxWidth='100vw'>
          <Flexbox flexDirection='column' style={styles.cell}>
            <h3>
              Mail Services in New Orleans
            </h3>

            <p>Parcels and Post is your local go-to shipping related 
            service provider. We are located Uptown on Magazine St. 
            in New Orleans, LA.</p>

            <p>We provide the very best customer experience by making 
            it easy to get your items packed to their destination on 
            time and have them arrive in perfect condition.</p>

            <p>Doing business with Parcels and Post is easy. We are 
            proud to be an integral part of the community serving our 
            friends and neighbors. Come in for a relaxing shipping 
            experience – our customers love us!</p>
          </Flexbox>

          <Flexbox 
            flexDirection='column' 
            minWidth='180px' 
            justifyContent='space-between'
          >
  
            <Flexbox flexDirection='row' justifyContent='center' style={styles.cell}>
              <Flexbox>
                <Icon name='map pin' size='large'/>
              </Flexbox>
              <Flexbox flexDirection='column'>
                <Flexbox>
                  5208 Magazine St.    
                </Flexbox>
                <Flexbox>
                  New Orleans, LA 70115
                </Flexbox>
              </Flexbox>
            </Flexbox>

            <Flexbox flexDirection='row' justifyContent='center' style={styles.cell}>
              <Flexbox>
                <Icon name='phone' size='large'/>
              </Flexbox>
              <Flexbox>
                (504) 891-8402
              </Flexbox>
            </Flexbox>
            
            <Flexbox style={styles.cell}>
              <Schedule/>
            </Flexbox>

          </Flexbox>
        </Flexbox>
        
        <Flexbox>
          <Map isMarkerShown/>
        </Flexbox>

      </Flexbox>
    )
  }
}

const styles= {
  homeStyle:{
    backgroundImage: `url(${flags})`,
    backgroundSize: 'cover',
  },
  cell: {
    padding: '7px', 
    margin:'5px', 
    backgroundColor:'rgba(0,0,0,0.6)',
    color:'white'
  },
}
export default Home