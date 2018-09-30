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
  
class Partners extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        <Flexbox>
          <h1 style={{ fontFamily: 'Baskerville', width:'100vw', textAlign:'center', backgroundColor:'#09A7E7'}} >
            Your business ships!
          </h1>
        </Flexbox>
        <Flexbox flexDirection='column' width='900px' maxWidth='90vw' alignItems='center'>
          <Flexbox flexDirection='column' width='700px' maxWidth='90vw' padding='20px 0px 20px 0px' style={{textAlign:'justify'}}>
            <p>
            Let Parcels and Post help your store deliver excellent customer service 
            by shipping your client’s purchase home. Several 
            times a week we roll in the Parcels and Post van to pickup at business 
            like yours up and down Magazine Street, Julia/Warehouse District and the 
            French Quarter.
            </p>
          </Flexbox>

          <Flexbox>
            <h2 style={{ fontFamily: 'Baskerville', paddingBottom:'10px', textDecoration:'underline', textAlign:'center'}}>
              Our Shipping Friends and Associates
            </h2>
          </Flexbox>
          
          <Flexbox >
            <Card.Group centered>
              <Card style={{backgroundColor: '#09A7E7'}}
                image={AdamHall}
                header='Adam Hall'
                meta='Artist'
                description='http://www.adamhallart.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={AlexBeard}
                header='Alex Beard'
                meta='Artist'
                description='https://www.alexbeardstudio.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Antieau}
                header='Antieau Gallery'
                meta='Artist'
                description='http://www.antieaugallery.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={longshore}
                header='Ashley Longshore Gallery'
                meta='Gallery'
                description='https://www.ashleylongshore.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={billy}
                header='Billy Soliratio Fine Art'
                meta='Artist'
                description='https://www.ashleylongshore.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={hat}
                header='Colby Hebert the Cajun Hatter'
                meta='Clothing'
                description='https://www.colbyhebert.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={CrescentCity}
                header='Crescent City Auction Gallery'
                meta='Auction House'
                description='https://www.crescentcityauctiongallery.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={DirtyCoast}
                header='Dirty Coast'
                meta='Clothing & Souvenirs'
                description='https://dirtycoast.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={EllenMacomber}
                header='Ellen Macomber'
                meta='Art & Clothing'
                description='https://ellenmacomber.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={frank}
                header='Frank Relle Photography'
                meta='Artist'
                description='www.frankrelle.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={two}
                header='Gallery Two'
                meta='Gallery'
                description='https://gallerytwonola.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Graphite}
                header='Graphite Galleries'
                meta='Art Gellery'
                description='http://www.graphitenola.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={JamieHayes}
                header='Jamie HayesGallery'
                meta='Artist'
                description='https://jamiehayes.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={jcb}
                header='JCB Creations'
                meta='Bakery'
                description='https://www.jcbcreations.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={luca}
                header='Luca Falcone Custom Clothier'
                meta='Clothing'
                description='https://www.lfsuits.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={martine}
                header='Martine Chaisson Gallery'
                meta='Gallery'
                description='https://www.martinechaissongallery.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={noma}
                header='NOMA'
                meta='Museum & Gallery'
                description='https://www.noma.org/shop/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={JamieHayes}
                header='Susan Bergman Ceramics'
                meta='Artist'
                description='https://www.sebergman.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={uptown}
                header='Uptown Frames'
                meta='Framing'
                description='https://www.uptownframes.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Wirthmore}
                header='Wirthmore Antiques'
                meta='Antiques'
                description='https://www.wirthmoreantiques.com/'
              />
              
            </Card.Group>
          </Flexbox>

          <Flexbox flexDirection='column' width='600px' maxWidth='90vw' padding='20px 0px 60px 0px'>
          <h2>
            Want to ship with us? Here’s how it works:
          </h2>
          <ul>
            <li>
              Call P&P for a shipping quote for your item.
            </li>
            <li>
              Once your business or your customer OK’s the quote we’ll put you on the list for complimentary pickup.
            </li>
            <li>
              We can bill your store or work directly with your client or designer to arrange payment and work out the shipping arrangements.
            </li>
            <li>
              We bring the item back to Parcels and Post and tenderly package it for transportation, the carriers pick up at our store.
            </li>
            <li>
              We provide full visibility to you and your customer by delivering an email with the carrier used, the date of expected delivery, the tracking number, and the credit card slip.
            </li>
          </ul>

          Here’s what we most frequently pick up and ship:
          <ul>
            <li>
              Artwork
            </li>
            <li>
              Photographs
            </li>
            <li>
              Sculptures
            </li>
            <li>
              Furniture 
            </li>
            <li>
              Lighting 
            </li>
            <li>
              Housewares 
            </li>
            <li>
              Auction Items 
            </li>
            <li>
              Taxidermy 
            </li>
            <li>
              Electronics 
            </li>
            <li>
              Musical Instruments 
            </li>
            <li>
              Office Equipment 
            </li>
            <li>
              Family Heirlooms
            </li>
          </ul>
          </Flexbox>

        </Flexbox>
      </Flexbox>
    )
  }
}

export default Partners