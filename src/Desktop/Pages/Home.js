// React
import React from 'react'
import Flexbox from 'flexbox-react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../../../src/index.css'
import pplogo from '../../Images/Logos/pplogo.png'
// Components
import Map from '../Components/Map'
import Schedule from '../Components/Schedule'
// Images
import storefront from '../../Images/Background/storefront.jpg';
import banner1 from '../../Images/Background/banner1.png';

class Home extends React.Component {
render() {
  return(
    <Flexbox 
      flexDirection='Row' 
      height='100%' 
      width='100vw' 
      alignItems='center' 
      justifyContent='center'
    >
      <Flexbox 
        width='50vw' 
        height='100%' 
        alignItems='center' 
        justifyContent='center'
        style={styles.homeStyle}
      />
      
      <Flexbox
        height='100%' 
        width='50vw' 
        alignItems='center' 
        justifyContent='center'
        style={{backgroundColor: '#09A7E7'}}
      >
        <div
          style={{
              width: '100px',
              height: '100px',
              position: 'absolute',
              left:'0',
              top:'0',
              bottom:'0',
              right:'0',
              margin:'auto',
              marginTop:'75px',
              textAlign:'center',
          }}/>
        
        <Flexbox 
          flexDirection='column' 
          height='100%' 
          width='100vw' 
          alignItems='center' 
          justifyContent='center'
          maxWidth='40vw'
        >
          <Flexbox>
            <div style={{color:'white', paddingBottom:'20px', textAlign:'center'}}>
              <h2>
                From a Stamp To a Crate - We Love Your Package!
              </h2>
            </div>
          </Flexbox>
          <Flexbox flexDirection='row' width='600px' maxWidth='40vw'>
            <Flexbox flexDirection='column' style={styles.cell}>
              

              <p>Parcels and Post is your Uptown neighborhood go-to for all things shipping related.
              We are conveniently nestled between Jefferson and Napoleon on the river side of Magazine Street.</p>

              <p>We provide the very best customer experience by making it easy to get your items properly packed and to their destination on time and in perfect condition.</p>

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

        </Flexbox>
    </Flexbox>
  )
}
}

const styles= {
homeStyle:{
  backgroundImage: `url(${storefront})`,
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