import React from 'react'
import Flexbox from 'flexbox-react'
import cardboard from '../../Images/Background/cardboard2.jpg'
import boxes from '../../Images/Background/boxes.jpg'

class Services extends React.Component {
  render() {
    return(
      <Flexbox justifyContent='center' width='100vw' paddingBottom='60px'>
        <Flexbox flexDirection='column'>

          <div style={styles.usps}>
            <h3>
              US Postal Products
            </h3>
            Certified mail, Return Receipt
            USPS Ground, Priority Mail, Express Mail
            We Accept Prepaid Label items for pickup
          </div>

    
          <div style={styles.items}>
            <h3>
              Fed Ex
            </h3>
            Ground, Express, International Economy, Book Rate
            International Express
            Domestic and International Air Freight
            Prepaid FedEx Labels
          </div>

    
          <div style={styles.items}>
            <h3>
              DHL
            </h3>
            Expert Fast Service to the World.
            Documents, Parcels Air Freight
          </div>

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
    color:'white'
  },
  mailbox:{
    backgroundImage: `url(${boxes})`,
    backgroundSize: 'cover',
    padding: '10px 0px 10px 0px',
    color:'white'
  },
}

export default Services