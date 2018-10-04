import React from 'react'
import Flexbox from 'flexbox-react'
import { Card } from 'semantic-ui-react' 
// Partner Logos
  import AdamHall from '../../Images/Partners/AdamHall.png'
  import AlexBeard from '../../Images/Partners/AlexBeard.png'
  import Antieau from '../../Images/Partners/Antieau.png'
  import CrescentCity from '../../Images/Partners/CrescentCity.jpg'
  import DirtyCoast from '../../Images/Partners/DirtyCoast.png'
  import EllenMacomber from '../../Images/Partners/Ellen_Macomber_logo.png'
  import Graphite from '../../Images/Partners/GraphiteGalleries.png'
  import JamieHayes from '../../Images/Partners/jamiehayes.png'
  import Wirthmore from '../../Images/Partners/Wirthmore.png'
  import billy from '../../Images/Partners/billy.png'
  import frank from '../../Images/Partners/frank.png'
  import hat from '../../Images/Partners/hat.png'
  import jcb from '../../Images/Partners/jcb.png'
  import longshore from '../../Images/Partners/longshore.png'
  import luca from '../../Images/Partners/luca.png'
  import martine from '../../Images/Partners/martine.png'
  import noma from '../../Images/Partners/noma.png'
  import uptown from '../../Images/Partners/uptown.png'
  import two from '../../Images/Partners/two.png'
  import susan from '../../Images/Partners/susan.png'
  
class PartnerLogos extends React.Component {
  render() {
    return(
      <Flexbox style={{width: '100vw', color:'white', textAlign: 'center'}} alignItems='center' >
        <Card.Group centered >
          <Card style={{backgroundColor: '#09A7E7', color:'red'}}
            image={AdamHall}
            header='Adam Hall'
            meta='Fine Art'
            description='www.adamkhall.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={AlexBeard}
            header='Alex Beard'
            meta='Abstract Naturalism'
            description='www.alexbeardstudio.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={Antieau}
            header='Antieau Gallery'
            meta='Fabric Paintings'
            description='www.antieaugallery.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={longshore}
            header='Ashley Longshore Gallery'
            meta='Pop-Artist'
            description='www.ashleylongshore.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={billy}
            header='Billy Solitario Fine Art'
            meta='Artist'
            description='www.billysolitario.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={hat}
            header='Colby Hebert the Cajun Hatter'
            meta='Custom Made Hats'
            description='www.colbyhebert.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={CrescentCity}
            header='Crescent City Auction Gallery'
            meta='Auction House'
            description='www.crescentcityauctiongallery.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={DirtyCoast}
            header='Dirty Coast'
            meta='Local Clothing & Souvenirs'
            description='www.dirtycoast.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={EllenMacomber}
            header='Ellen Macomber'
            meta='Art & Clothing'
            description='www.ellenmacomber.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={frank}
            header='Frank Relle Photography'
            meta='Fine Photography'
            description='www.frankrelle.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={two}
            header='Gallery Two'
            meta='Mischevious Sculpture and Jewelry'
            description='www.gallerytwonola.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={Graphite}
            header='Graphite Galleries'
            meta='Art Gellery'
            description='www.graphitenola.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={JamieHayes}
            header='Jamie HayesGallery'
            meta='Artist'
            description='www.jamiehayes.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={jcb}
            header='JCB Creations'
            meta='Custom Cakes and Cookies'
            description='www.jcbcreations.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={luca}
            header='Luca Falcone Custom Clothier'
            meta='Clothing'
            description='www.lfsuits.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={martine}
            header='Martine Chaisson Gallery'
            meta='Gallery'
            description='www.martinechaissongallery.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={noma}
            header='NOMA'
            meta='Museum & Gallery'
            description='www.noma.org/shop/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={susan}
            header='Susan Bergman Ceramics'
            meta='Artist'
            description='www.sebergman.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={uptown}
            header='Uptown Frames'
            meta='Framing'
            description='www.uptownframes.com/'
          />
          <Card style={{backgroundColor: '#09A7E7'}}
            image={Wirthmore}
            header='Wirthmore Antiques'
            meta='Antiques'
            description='www.wirthmoreantiques.com/'
          />
          
        </Card.Group>
      </Flexbox>
    )
  }
}

export default PartnerLogos