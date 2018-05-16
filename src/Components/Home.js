import React from 'react'
import Flexbox from 'flexbox-react'
import streetview from '../Images/background/streetview.jpg';
import { Icon, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Map from './Map'

class Home extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
            <Flexbox flexDirection='row'>
              <table style={styles.mailTable}>
                <tr>
                  <td rowSpan='3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding:'5px', minWidth:'50%' }}>
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
                  </td>
                  <td style={{backgroundColor: 'rgba(0,0,0,0.7)', padding:'5px', width:'200px'}}>
                    <Flexbox flexDirection='row' alignContent='center' justifyContent='center'>
                      <Flexbox justifyContent='center' alignItems='center'>
                        <div style={{padding:'0px 10px 0px 0px'}}>
                          <Icon name='map pin' size='large'/>
                        </div>
                      </Flexbox>
                      <Flexbox flexDirection='column' justifyContent='center'>
                        <div>
                          5208 Magazine St.
                        </div>
                        <div>
                          New Orleans, LA 70115
                        </div>
                      </Flexbox>
                    </Flexbox>
                  </td>
                </tr>
                <tr>
                  <td style={{backgroundColor: 'rgba(0,0,0,0.7)', padding:'5px'}}>
                    <Flexbox flexDirection='row' alignContent='center' justifyContent='center'>
                      <Flexbox alignContent='center' justifyContent='center'>
                        <div style={{padding:'0px 10px 0px 0px'}}>
                          <Icon name='phone' size='large'/>
                        </div>
                      </Flexbox>
                      <Flexbox flexDirection='column'>
                        <div>
                        (504) 891-8402
                        </div>
                      </Flexbox>
                    </Flexbox>
                  </td>
                </tr>
                <tr>
                  <td style={{backgroundColor: 'rgba(0,0,0,0.7)', padding:'5px',}}>
                    <Flexbox alignContent='center' justifyContent='center'>
                      
                      <table>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Mon.
                          </td>
                          <td>
                          9:00 am - 6:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Tues.
                          </td>
                          <td>
                          9:00 am - 6:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Wed.
                          </td>
                          <td>
                          9:00 am - 6:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Thur.
                          </td>
                          <td>
                          9:00 am - 6:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Fri.
                          </td>
                          <td>
                          9:00 am - 6:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Sat.
                          </td>
                          <td>
                          9:00 am - 2:00 pm
                          </td>
                        </tr>
                        <tr>
                          <td style={{padding:'0px 15px 0px 0px'}}>
                          Sun.
                          </td>
                          <td>
                          Closed
                          </td>
                        </tr>
                      </table>

                    </Flexbox>
                  </td>
                </tr>

                <tr>
                  <td colSpan='2'>
                    <Map isMarkerShown/>
                  </td>
                </tr>

              </table>
          </Flexbox>
      </Flexbox>
    )
  }
}

const styles= {
  mailTable: {
    color: 'white',
    width: '80vw',
    maxWidth:'620px',
    borderSpacing: '10px',
    border: '0px',
    alignItems: 'center',
  },
}
export default Home