import React from 'react'
import Flexbox from 'flexbox-react'
import cardboard from '../../Images/Background/cardboard2.jpg'
import freight from '../../Images/Background/freight.jpg'
import boxes from '../../Images/Background/boxes.jpg'
import doc from '../../Images/Background/doc.jpg'
import { Image } from 'semantic-ui-react'
import usps from '../../Images/Logos/usps.png'
import fedex from '../../Images/Logos/fedex.png'
import dhl from '../../Images/Logos/dhl.png'

class Services extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' justifyContent='center' width='100vw' style={{marginBottom:'60px', textShadow: '2px 2px #000000'}}>

        <Flexbox flexDirection='column' style={styles.cardboard} >
          <Flexbox style={styles.carrier}>
            <div alignSelf='center'>
              <Image src={usps} style={{maxHeight:'79px'}}/>
            </div>
            <Flexbox flexDirection='row' style={{textAlign: 'center', paddingTop:'5px' }}>
              <Flexbox flexDirection='column' style={{paddingRight: '5px'}}> 
                <div>
                  Certified mail
                </div>
                <div>
                  Return Receipt
                </div>
                <div>
                  USPS Ground
                </div>
              </Flexbox>
              <Flexbox flexDirection='column' style={{paddingLeft: '5px'}}> 
                <div>
                  Priority Mail
                </div>
                <div>
                  Express Mail
                </div>
                <div>
                  Prepaid Labels
                </div>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox style={styles.carrier}>
            <div>
              <Image src={fedex} style={{maxHeight:'79px'}}/>
            </div>
            <Flexbox flexDirection='row' style={{textAlign: 'center', paddingTop:'5px' }}>
              <Flexbox flexDirection='column' style={{paddingRight: '5px'}}> 
                <div>
                  Ground
                </div>
                <div>
                  Express
                </div>
                <div>
                  Intl. Economy
                </div>
              </Flexbox>
              <Flexbox flexDirection='column' style={{paddingLeft: '5px'}}> 
                <div>
                  Intl. Express
                </div>
                <div>
                  Air Freight
                </div>
                <div>
                  Prepaid Labels
                </div>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox style={styles.carrier}>
            <div>
              <Image src={dhl} style={{maxHeight:'79px'}}/>
            </div>
            <Flexbox flexDirection='row' style={{textAlign: 'center' }}>
              <Flexbox flexDirection='column' style={{padding: '5px'}}> 
                <div>
                  Expert Fast Service to the World
                </div>
                <div>
                  Parcels Air Freight
                </div>
                <div>
                  Documents
                </div>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>

       
  
       <div style={styles.freight}>
            <div style={{minHeight: '250px', padding: '20px 20px 20px 20px'}}>
              <h1 style={{textAlign:'center'}}>
                Motor Freight
              </h1>
              (LTL) Less-Than-Truckload with over 30 carriers Nation wide
              <div>
                Air Cargo capabilities available as well!
              </div>
              <div>
                High Value “Never Stop” options for extremely high value urgent
                shipments that may need special security to be transported quickly,
                safely and securely.  
              </div>
            </div>
          </div>

          <Flexbox style={styles.doc} flexDirection='column'>
            <h1>
              Document Services
            </h1>
            <Flexbox justifyContent='center' alignItems='center'>
              Copy, Fax, Scan, and Print
            </Flexbox>
          </Flexbox>

          <Flexbox flexDirection='column' style={styles.mailbox}>
            <Flexbox flexDirection='column' style={{maxWidth:'90vw', width:'100%'}}>
              <h3>
                Private Mail Boxes
              </h3>
              <ul>
                <li>
                  Magazine Street Address             
                </li>
                <li>
                  Package Receiving
                </li>
                <li>
                  REAL address - not a p.o. box
                </li>
                <li>
                  Mail forwarding “anywhere” in the world. 
                </li>
              </ul>
              Stop the “Porch Pirates” - Have it delivered here 6 days a week. 
            </Flexbox>
          </Flexbox>

        <Flexbox flexDirection='column' style={styles.items}>
          <h3>
            Custom Boxes
          </h3>

        We can construct any box to your specifications and requirements.  We can even custom make boxes for your carry-on items or artwork.
        </Flexbox>

        <Flexbox flexDirection='column' style={styles.items}>
          <h3>
            Crating
          </h3>
          Custom Crating for larger, difficult, and more valuable items. 
        </Flexbox>

        <Flexbox flexDirection='column' style={styles.items}>
          <h3>
            Insurance
          </h3>
          We can give you access to not only carrier insurance but to 3rd party insurance as well.
        </Flexbox>

        <Flexbox flexDirection='column' style={styles.items}>  
          <h3>
            WAY COOL STAMPS!!
          </h3>
        </Flexbox>

      </Flexbox>
    )
  }
}

const styles={
  items:{
    padding: '10px 0px 10px 0px',
    justifyContent: 'center',
    alignSelf:'center',
    maxWidth:'90vw', 
    width:'100%'
  },
  cardboard:{
    backgroundImage: `url(${cardboard})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white'
  },
  mailbox:{
    backgroundImage: `url(${boxes})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white',
  },
  freight:{
    backgroundImage: `url(${freight})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white',
  },
  carrier:{
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '15px',
    paddingBottom:'15px',
  },
  doc:{
    backgroundImage: `url(${doc})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white',
    minHeight: '200px', 
    padding: '20px 20px 20px 20px',
    textAlign: 'center',
    maxWidth:'100vw'
  },
}

export default Services