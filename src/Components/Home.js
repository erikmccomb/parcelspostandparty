import React from 'react'
import Flexbox from 'flexbox-react'
import streetview from '../Images/background/streetview.jpg';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Map from './Map'

class Home extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' >

        <Flexbox style={styles.homePage} flexDirection='row'>

          <Flexbox style={{margin: '50px 10px 50px 10px'}}>
            <div style={{maxWidth: '400px', backgroundColor: 'rgba(0,0,0,0.7)', padding:'10px'}}>
              <h3>
              Mail Services in New Orleans
              </h3>
              <p>
                Parcels and Post is your local go-to shipping related service provider. We are located Uptown on Magazine St. in New Orleans, LA.
              </p>
              <p>
                We provide the very best customer experience by making it easy to get your items packed to their destination on time and have them arrive in perfect condition.
              </p>
              <p>
                Doing business with Parcels and Post is easy. We are proud to be an integral part of the community serving our friends and neighbors. Come in for a relaxing shipping experience – our customers love us!
              </p>
            </div>
          </Flexbox>

          <Flexbox flexDirection='column' style={{maxWidth: '400px', marginRight: '10px'}}>
            <Flexbox flexDirection='row' style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)', padding:'10px'}}>
              <Flexbox>
                <div style={{paddingRight: '5px', width: '30px'}}>
                  <Icon name='map pin' size='large'/>
                </div>
              </Flexbox>
              <Flexbox flexDirection='column' style={{minWidth: '150px'}}>
                <div>
                5208 Magazine St.
                </div>
                <div>
                New Orleans, LA 70115
                </div>
              </Flexbox>
            </Flexbox>

            <Flexbox flexDirection='row' style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)', padding:'10px', marginTop:'10px'}}>
              <Flexbox>
                <div style={{paddingRight: '5px', width: '30px'}}>
                  <Icon name='phone' size='large'/>
                </div>
              </Flexbox>
              <Flexbox flexDirection='column' style={{minWidth: '150px'}}>
                <div>
                (504) 891-8402
                </div>
              </Flexbox>
            </Flexbox>
            
            <Flexbox>
              <div style={{paddingTop: '10px'}}>
                <Map isMarkerShown />
              </div>
            </Flexbox>
          </Flexbox>

        </Flexbox>

      </Flexbox>
    )
  }
}

const styles= {
  homePage: {
    backgroundImage: `url(${streetview})`,
    height: 'auto',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100vw',
    color: 'white',
    alignItems: 'center', 
    justifyContent: 'center',
  },

}
export default Home