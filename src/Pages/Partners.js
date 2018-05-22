import React from 'react'
import Flexbox from 'flexbox-react'
import { Button, Card, Image } from 'semantic-ui-react'
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
        Partners Component

        <Flexbox flexDirection='column'>
          <h1>
            Your business ships!
          </h1>
          <p>
          Let Parcels and Post help your store deliver excellent customer service 
          by shipping your client’s purchase home, wherever home may be. Several 
          times a week we roll in the Parcels and Post van to pickup at business 
          like yours up and down Magazine Street, Julia/Warehouse District and the 
          French Quarter.
          </p>
          <Flexbox flexDirection='column'>
            <Flexbox>
              Here is a list of our friends and associates who trust us with their shipping:
            </Flexbox>
            <Flexbox >
              <Card.Group centered>
                <Card
                  style={{backgroundColor: '#D9499A'}}
                  image={AdamHall}
                  header='Adam Hall'
                  meta='Artist'
                  description='http://www.adamhallart.com/'
                />
                <Card
                  image={AlexBeard}
                  header='Alex Beard'
                  meta='Artist'
                  description='https://www.alexbeardstudio.com/'
                />
                <Card
                  image={Antieau}
                  header='Antieau Gallery'
                  meta='Artist'
                  description='http://www.antieaugallery.com/'
                />
                <Card
                  image={CrescentCity}
                  header='Crescent City Auction Gallery'
                  meta='Auction House'
                  description='https://www.crescentcityauctiongallery.com/'
                />
                <Card
                  image={DirtyCoast}
                  header='Dirty Coast'
                  meta='Clothing & Souvenirs'
                  description='https://dirtycoast.com/'
                />
                <Card
                  image={EllenMacomber}
                  header='Ellen Macomber'
                  meta='Art & Clothing'
                  description='https://ellenmacomber.com/'
                />
                <Card
                  image={Graphite}
                  header='Graphite Galleries'
                  meta='Art Gellery'
                  description='http://www.graphitenola.com/'
                />
                <Card
                  image={Heirloom}
                  header='Heirloom'
                  meta='Furnishings & Consignment'
                  description='http://www.heirloomfurnishings.com/'
                />
                <Card
                  image={JamieHayes}
                  header='Jamie HayesGallery'
                  meta='Artist'
                  description='https://jamiehayes.com/'
                />
                <Card
                  image={Octavia}
                  header='Octavia'
                  meta='Art Gallery'
                  description='http://www.octaviaartgallery.com/'
                />
                <Card
                  image={VillaVici}
                  header='Villa Vici'
                  meta='Furniture'
                  description='https://villavici-furniture.com/'
                />
                <Card
                  image={Wirthmore}
                  header='Wirthmore Antiques'
                  meta='Antiques'
                  description='https://wirthmoreantiques.com/'
                />
                
              </Card.Group>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Partners