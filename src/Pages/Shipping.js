  import React from 'react'
  import Flexbox from 'flexbox-react'
  import { Card, Image } from 'semantic-ui-react'
// Images
  import cardboard2 from '../Images/Background/cardboard2.jpg';
  import fedex from '../Images/Logos/fedex.png';
  import usps from '../Images/Logos/usps.png';
  import ups from '../Images/Logos/ups.png';
  import dhl from '../Images/Logos/dhl.png';

class Shipping extends React.Component {
  render() {
    return(
      <Flexbox flexGrow={1} flexDirection='column' style={{width: '100vw', height: '100%', backgroundColor:'black'}} alignItems='center' >
      
      
      {/* Shipping Branding */}
        <Flexbox flexDirection='row' style={styles.cardboard} justifyContent='center' alignContent='center' alignItems='center'>
          <Flexbox flexDirection='column'>
            <Flexbox justifyContent='center' style={{color:'white'}}>
              <h1 style={{fontSize:'40px', textShadow:'1px 1px #000000', paddingBottom:'10px',}}>We'll ship it.</h1>
            </Flexbox>

            <Flexbox>
              <Image.Group>
                <Image src={usps} style={styles.logo}/>
                <Image src={fedex} style={styles.logo}/>
                <Image src={ups} style={styles.logo}/>
                <Image src={dhl} style={styles.logo}/>
              </Image.Group>
            </Flexbox>

          </Flexbox>
        </Flexbox>

      </Flexbox>
    )
  }
}

const styles= {
  cardboard:{
    backgroundImage: `url(${cardboard2})`,
    backgroundSize: 'cover',
    width: '100vw', 
    minHeight: '300px',
  },
  logo:{
    maxHeight: '100px', 
    paddingLeft:'20px', 
    paddingRight:'20px',
  }
}

export default Shipping