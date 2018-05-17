  import React from 'react'
  import Flexbox from 'flexbox-react'
  import { Image } from 'semantic-ui-react'
// Images
  import boxes from '../Images/Background/boxes.jpg';
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
        <Flexbox flexDirection='row'  style={styles.cardboard} justifyContent='center' alignContent='center' alignItems='center'>
          <Flexbox flexDirection='column' maxWidth='90vw'>
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

        <Flexbox flexDirection='column' width='100vw' height='300px' justifyContent='center' alignContent='center' alignItems='center'>
          <Flexbox flexDirection='column' maxWidth='90vw' width='700px' style={{backgroundColor:'rgba(255,255,255, 0.9)', margin: '20px', padding: '7px'}}>
            <div>
              <h3>
                Mail Boxes & Package Receiving
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra justo eu feugiat viverra. Suspendisse et leo in libero tincidunt facilisis. Suspendisse nec risus justo. In nibh odio, sagittis eu risus quis, bibendum pretium magna. Duis fermentum ornare arcu. 
              </p>
              <p>
              Sed sit amet porta mi. Vivamus pharetra enim eget turpis ullamcorper aliquet. Phasellus elementum mauris et turpis dictum posuere. Mauris eu purus nibh. Praesent bibendum egestas metus, finibus consequat leo porttitor at.
              </p>
            </div>
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='column' width='100vw' height='300px' justifyContent='center' alignContent='center' alignItems='center' style={{backgroundImage: `url(${boxes})`,
    backgroundSize: 'cover',}}>
          <Flexbox flexDirection='column' justifyContent='center' style={{color:'white', textAlign:'center',textShadow:'2px 2px #000000', fontSize:'30px', lineHeight:'40px'}}>
                <div style={{paddingBottom: '20px'}}>
                  Protect your mail with Parcels & Post
                </div>
                <div>
                   We offer private mailboxes, where we're always ready to receive your mail.
                </div>
                <div>
                  Pick it up whenever it's most convenient for you.
                </div>
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