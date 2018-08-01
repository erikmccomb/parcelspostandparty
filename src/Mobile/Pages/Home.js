// React
  import React from 'react'
  import Flexbox from 'flexbox-react'
  import { Icon, Image } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'
  import '../../../src/index.css'
// Components
  import Map from '../Components/Map'
  import Schedule from '../Components/Schedule'
// Images
  import store_1 from '../../Images/Background/store_1.jpg'
  import pplogo from '../../Images/Logos/pplogo.png'
  import banner1 from '../../Images/Background/banner1.jpg';

class Home extends React.Component { 
  render() {
    return(
      <Flexbox 
          flexDirection='column' 
          width='100vw' 
          alignItems='center' 
          justifyContent='center'
          style={styles.homeStyle}
      >
        <Flexbox 
          flexDirection='column' 
          width='90vw' 
          maxWidth='90vw' 
          style={{paddingTop:'10px'}}
        >
          <Flexbox 
            style={{backgroundColor:'#ffffff', borderRadius: '60px', paddingTop:'7px', paddingBottom:'3px'}} 
            justifyContent='center'
          >
            <Image src={pplogo} style={{height: '90px'}} />
          </Flexbox>
          <Flexbox style={{padding:'10px'}}>
            <div>
              <Image src={banner1} />
            </div>
          </Flexbox>
          <Flexbox flexDirection='column' style={styles.cell}>
            <h3 style={{textAlign:'center'}}>
            From Stamp To Crate - We Love Your Package!
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
  
            <Flexbox flexDirection='row' justifyContent='center' alignItems='center' style={styles.cell}>
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

              <Flexbox style={{paddingLeft:'20px'}}>
                <Icon name='phone' size='large'/>
              </Flexbox>
              <Flexbox>
                <a href='tel:1-504-891-8402' style={{color:'white'}}>(504) 891-8402</a>
              </Flexbox>
            </Flexbox>
            
            <Flexbox style={{alignSelf:'center', padding: '7px', margin:'5px', backgroundColor:'rgba(0,0,0,0.6)', color:'white', width: '90vw'}} justifyContent='center'>
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
    backgroundImage: `url(${store_1})`,
    backgroundSize: 'cover',
    paddingBottom:'60px'
  },
  cell: {
    padding: '7px', 
    margin:'5px', 
    backgroundColor:'rgba(0,0,0,0.6)',
    color:'white'
  },
}

export default Home