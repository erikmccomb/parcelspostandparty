import React from 'react'
import Flexbox from 'flexbox-react'
import { Card, Image } from 'semantic-ui-react'
import logo from '../../Images/Logos/pplogo.png'
import PartnerLogos from './PartnerLogos'

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
          <Flexbox flexDirection='column' width='700px' maxWidth='60vw' padding='20px 0px 20px 0px' style={{textAlign:'justify'}}>
            <p>
            Let Parcels and Post help your store deliver excellent customer service 
            by shipping your client’s purchase. We provide complimentary pickup 
            service for stores and galleries up and down Magazine Street, Julia/Warehouse 
            District and the French Quarter.  
            </p>
          </Flexbox>

          <Flexbox flexDirection='column' alignItems='center' style={{backgroundColor:'#000000', padding:'30px 0px 60px 0px', color: '#FFFFFF'}}>
            <Flexbox>
              <h1 style={{  paddingBottom:'50px', textDecoration:'underline', textAlign:'center'}}>
                Our Shipping Friends and Associates
              </h1>
            </Flexbox>
          
            <PartnerLogos/>
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