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
        <div style={{maxWidth:'90vw'}}>
          <table className="tdclass" style={styles.mailTable}>
            <tr>
              <td className='tdclass' rowSpan='3'>

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

              </td>
              <td className='tdclass' style={{width: '180px'}}>
                <Flexbox flexDirection='row' alignItems='center'>
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
              </td>
            </tr>
            <tr>
              <td className='tdclass' style={{width: '180px'}}>
                <Flexbox flexDirection='row' alignItems='center'>
                  <Flexbox style={{width: '50px', }}>
                    <Icon name='phone' size='large'/>
                  </Flexbox>
                  <Flexbox style={{textAlign:'center', width: '130px'}}>
                    (504) 891-8402
                  </Flexbox>
                </Flexbox>
              </td>
            </tr>
            <tr>
              <td className='tdclass' style={{width: '180px'}}>
                <Schedule/>
              </td>
            </tr>

            <tr>
              <td colSpan='2'>
                <Map isMarkerShown/>
              </td>
            </tr>

          </table>
        </div>
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