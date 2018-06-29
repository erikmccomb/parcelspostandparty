import React from 'react'
import Flexbox from 'flexbox-react'

class Faq extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' style={{width: '100vw'}} alignItems='center' >
        <Flexbox width='100vw' height='60px' style={{backgroundColor:'#09A7E7', color:'#FFF275', }} alignItems='center' justifyContent='center'>
          <div style={{width:'60vw', maxWidth:'90vw', fontFamily: 'Baskerville', fontSize:'25px'}}>   
            Frequently Asked Questions
          </div>
        </Flexbox>
        <Flexbox flexDirection='column' maxWidth='800px' paddingBottom='80px'>
          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
            Are you open on the weekend?
          </h3>

          <p style={{padding:'3px 0px 3px 20px',}}>
          We are open 9-6 Monday-Friday and 9-2 on Saturday. Closed major Holidays and on Sundays we rest.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Is this the same store that was on the corner of Magazine & Nashville?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Sure is – we moved 5 blocks downriver during the spring of 2014. Parcels and Post is on the river side of Magazine between Bellecastle and Dufossat. There is lots of street parking on Dufossat and we have 2/3 spots right in front of the store if you can get one.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Do you accept pre-paid return labels?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Yes we’ll take them. There is no charge for FedEx and for Postal items. Because we are not an authorized UPS location and do not have an every day UPS pickup we charge one dollar per package; on the days UPS does not pickup we take your packages to the UPS store.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          What time do your carriers pick up?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          The Post Office picks up every weekday at 3:30. Our service on Saturdays is spotty – sometimes they come and sometimes they do not.
          FedEx Ground drivers can come anytime after 4 pm weekdays no Saturday.
          FedEx Express drivers can come anytime after 5 pm weekdays no Saturday.
          DHL driver will come when we call for a pickup during the week. UPS can be anytime during business hours.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Can I get a tracking number on my important letter or small package?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Yes, we can add tracking to any postal product. Priority Mail and all FedEx/UPS/DHL service levels come with a tracking number.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          How long will it take for my package to get there?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          It depends on what carrier you select and how much you want to pay. First Class Mail is 1-6 business days. Priority Mail is 1-3 business days. With FedEx we offer Overnight, 2nd Day Air, 3rd Day Air and Ground. Place like Jackson and Houston are just 1 day delivery with FedEx Ground.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Does the receiver have to sign for the package?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Not unless you request it for most packages under $500 of insured value. The standard is for the driver/letter carrier to leave the package at the door. If you want a signature we offer it for all products.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Can I get insurance for the item(s) inside the package?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Yes we offer declared value coverage. Keep in mind that if an item is lost or damaged you will need to be able to prove the value of the item. You do not automatically get the amount of money it was insured for. We will handle the claims process if we packed and processed the shipment for you. Come on in or call for more details on insurance.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Can you ship to the UK? Asia? Cameroon?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Indeed – we can ship anywhere in the world except Iran, Burma and North Korea. FedEx is great to Canada, Europe and Australia but we prefer DHL to all other locations. The Post Office also will ship to international locations (often with no way to track the package) as a less expensive alternative. So…no computers to North Korea please.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Can I get a shipping AND/OR packing quote for my item before I bring it in?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Absolutely! Call 891-8402 with the following: description of item, approximate weight, length, width & height of the item, the destination zip code and if it needs to be insured. We will provide an estimate for packing and give you options on carriers to get it safely delivered.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          My packages are being stolen from my porch, can I have them sent to Parcels & Post?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Yes, we will accept packages and can sign for them on your behalf. Please call and let us know your name and telephone number before your first package arrives so we are on the lookout for it. There is a $2 per package charge for package receiving.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          I don't have a box or bubble wrap, can I just bring my item(s) in?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          Bring them on over, we have all the stuff needed to safety package your goods.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Do you accept used boxes and packing materials?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          We are happy to reuse your materials that are in good condition. If you think the box can make another trip or the bubbles are not popped – we’ll take it. Please refrain from bringing in anything that can't be used again.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Can I get copies/scans done at your store?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          We have a desktop printer/scanner so we can provide black and white and color copies for small jobs. We will also scan a reasonable amount of documents and email them for you.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          I have a thumb-drive full of documents that I need printed, can you help?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          For security, we can not use thumb drives with our system; However if you can email the documents to us we can print them out. Our email is parcelsandpost@gmail.com.
          </p>

          <h3 style={{backgroundColor:'#000000', color:'white', padding:'3px 0px 3px 5px',}}>
          Do you provide notary services?
          </h3>
          <p style={{padding:'3px 0px 3px 20px',}}>
          No but we have a nifty attorney in the neighborhood who can help you. His name is Stephen Schoenfeld. He has an office on Freret and can often come to you. Ready for his cell #? Its 504-416-2489.
          </p>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Faq