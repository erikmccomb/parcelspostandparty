import React from 'react';
import Flexbox from 'flexbox-react';

const PPLayout = ({children}) => {
  return (
    <Flexbox flexDirection='row' style={styles.Page}>
      <Flexbox>
        {children}
      </Flexbox>
      <Flexbox>
        
      </Flexbox>
    </Flexbox>
  )
}

const styles ={
  Page: {
    height: '100vh', 
    width: '100vw',
  }
}

export default PPLayout