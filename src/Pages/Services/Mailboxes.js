import React from 'react'
import Flexbox from 'flexbox-react'
import boxes from '../../Images/Background/boxes.jpg';

class Mailboxes extends React.Component {
render() {
  return(
    <Flexbox flexDirection='column'>
      <Flexbox flexDirection='column' alignItems='center'>
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

        <Flexbox flexDirection='column' width='100vw' height='300px' justifyContent='center' alignContent='center' alignItems='center' style={{backgroundImage: `url(${boxes})`,backgroundSize: 'cover',}}>
          <Flexbox flexDirection='column' justifyContent='center' style={{color:'white', textAlign:'center',textShadow:'2px 2px #000000', fontSize:'25px', lineHeight:'40px'}}>
                <div style={{paddingBottom: '20px'}}>
                  Protect your mail with Parcels & Post
                </div>
                <div>
                   We offer private mailboxes - let us receive your mail.
                </div>
                <div>
                  Pick it up when you're ready.
                </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Mailboxes