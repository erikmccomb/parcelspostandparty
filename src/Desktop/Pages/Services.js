import React from 'react'
import Flexbox from 'flexbox-react'
import { Image } from 'semantic-ui-react'
import cardboard from '../../Images/Background/cardboard2.jpg'
import boxes from '../../Images/Background/boxes.jpg'
import usps from '../../Images/Logos/usps.png'
import fedex from '../../Images/Logos/fedex.png'

class Services extends React.Component {
  render() {
    return(
      <Flexbox  flexDirection='column' justifyContent='center' width='100vw'>
        <Flexbox flexDirection='column' width='100vw'>
          
          <Flexbox 
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            style={styles.usps} 
          >
            <div>
              <Image src={usps} size='medium'/>
            </div>
            <Flexbox flexDirection='row' >
              <ul style={{listStyleType:'none'}}>
                <li>
                  Certified mail
                </li>
                <li>
                  Return Receipt
                </li>
                <li>
                  USPS Ground
                </li>
              </ul>
              <ul style={{listStyleType:'none'}}>
                <li>
                  Priority Mail
                </li>
                <li>
                  Express Mail
                </li>
                <li>
                  Prepaid Labels
                </li>
              </ul>
            </Flexbox>
  

            <div>
              <Image src={fedex} size='medium'/>
            </div>
            <Flexbox flexDirection='row'>
              <ul style={{listStyleType:'none'}}>
                <li>
                  Ground
                </li>
                <li>
                  Express
                </li>
                <li>
                  International Economy
                </li>
              </ul>
              <ul>
                <li>
                  International Express
                </li>
                <li>
                  Domestic/International Air Freight
                </li>
                <li>
                  Prepaid FedEx Labels
                </li>
              </ul>
            </Flexbox>
          </Flexbox>
    
          <div style={styles.items}>
            <h3>
              DHL
            </h3>
            Expert Fast Service to the World.
            Documents, Parcels Air Freight
          </div>
          </Flexbox>
          <div style={styles.items}>
            <h3>
              Motor Freight. 
            </h3>
            (LTL) Less Than Truckload.
            Over 30 carriers Nation wide
          </div>

          <div style={styles.items}>
            We have Air Cargo capabilities as well.
            High Value “Never Stop” options for extremely high value urgent
            shipments that may need special security to be transported quickly,
            safely and securely.  
          </div>

          <div style={styles.items}>
            Document Services –Copy, Fax, Scan and Print
          </div>
    
          <div style={styles.mailbox}>
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
          </div>
    
          <div style={styles.items}>
            <h3>
              Custom Boxes
            </h3>

          We can construct any box to your specifications and requirements.  We can even custom make boxes for your carryon items for artwork.
          </div>

          <div style={styles.items}>
            <h3>
              Crating
            </h3>
            Custom Crating for larger, difficult, and more valuable items. 
          </div>
          
          <div>
            <h3>
              Insurance
            </h3>
            We can give you access to not only carrier insurance but to 3rd party insurance as well.
          </div>

          <div>  
            <h3>
              WAY COOL STAMPS!!
            </h3>
          </div>


      </Flexbox>
    )
  }
}

const styles={
  items:{
    padding: '10px 0px 10px 0px',
  },
  usps:{
    backgroundImage: `url(${cardboard})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white',
  },
  mailbox:{
    backgroundImage: `url(${boxes})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white'
  },
}

export default Services