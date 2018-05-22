import React from 'react'
import Flexbox from 'flexbox-react'
import { Button, Card, Image } from 'semantic-ui-react'
import logo from '../Images/Logos/pplogo.png'
// Partner Logos
  import AdamHall from '../Images/Partners/AdamHall.png'
  import AlexBeard from '../Images/Partners/AlexBeard.png'
  import Antieau from '../Images/Partners/Antieau.png'
  import CrescentCity from '../Images/Partners/CrescentCity.jpg'
  import DirtyCoast from '../Images/Partners/DirtyCoast.png'
  import EllenMacomber from '../Images/Partners/Ellen_Macomber_logo.png'
  import Graphite from '../Images/Partners/GraphiteGalleries.png'
  import Heirloom from '../Images/Partners/Heirloom.jpg'
  import JamieHayes from '../Images/Partners/jamiehayes.png'
  import Octavia from '../Images/Partners/octavia.png'
  import VillaVici from '../Images/Partners/Villa-Vici-Logo.png'
  import Wirthmore from '../Images/Partners/Wirthmore.png'

class Partners extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        <Flexbox>
          <h1 style={{ fontFamily: 'Baskerville', width:'100vw', textAlign:'center', backgroundColor:'#09A7E7'}} >
            Your business ships!
          </h1>
        </Flexbox>
        <Flexbox flexDirection='column' width='900px' maxWidth='100vw' alignItems='center'>
          <Flexbox flexDirection='column' width='700px' maxWidth='90vw' paddingTop='20px'>
            <p>
            Let Parcels and Post help your store deliver excellent customer service 
            by shipping your client’s purchase home, wherever home may be. Several 
            times a week we roll in the Parcels and Post van to pickup at business 
            like yours up and down Magazine Street, Julia/Warehouse District and the 
            French Quarter.
            </p>
          </Flexbox>
          <Image src={logo} size='medium'/>

          <Flexbox>
            <h2 style={{ fontFamily: 'Baskerville', paddingBottom:'10px', textDecoration:'underline'}}>
              Our Shipping friends and associates
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
                image={Graphite}
                header='Graphite Galleries'
                meta='Art Gellery'
                description='http://www.graphitenola.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Heirloom}
                header='Heirloom'
                meta='Furnishings & Consignment'
                description='http://www.heirloomfurnishings.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={JamieHayes}
                header='Jamie HayesGallery'
                meta='Artist'
                description='https://jamiehayes.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Octavia}
                header='Octavia'
                meta='Art Gallery'
                description='http://www.octaviaartgallery.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={VillaVici}
                header='Villa Vici'
                meta='Furniture'
                description='https://villavici-furniture.com/'
              />
              <Card style={{backgroundColor: '#09A7E7'}}
                image={Wirthmore}
                header='Wirthmore Antiques'
                meta='Antiques'
                description='https://wirthmoreantiques.com/'
              />
              
            </Card.Group>
          </Flexbox>

          <Flexbox flexDirection='column' width='600px' paddingTop='20px'>
          <h2>
            Want to ship with us? Here’s how it works:
          </h2>
          <ul>
            <li>
              Call P&P for a shipping quote for your item.
            </li>
            <li>
              Once your business or your customer OK’s the quote we’ll put you on the list for pickup.
            </li>
            <li>
              We can bill your store or work directly with your client or designer to arrange payment and work out the shipping arrangements.
            </li>
            <li>
              Pickup is always free.
            </li>
            <li>
              We bring the item back to Parcels and Post and tenderly package it for transportation, the carriers pick up at our store.
            </li>
            <li>
              We provide full visibility to you and your customer by delivering an email with the carrier used, the date of expected delivery, the tracking number, and the credit card slip.
            </li>
            <li>
              When you work with P&P there are no hassles if the item is damaged or lost in transit by the carrier. We guarantee our services which means you or your customer gets compensated. No more tussles with UPS or FedEx,we do it for you.
            </li>
          </ul>

          Here’s what we most frequently pick up and ship:
          <ul>
            <li>
              Artwork Sculptures 
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
              Signs 
            </li>
            <li>
              Textiles
            </li>
          </ul>
          </Flexbox>

        </Flexbox>
      </Flexbox>
    )
  }
}

export default Partners