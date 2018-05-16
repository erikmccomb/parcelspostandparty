import React from 'react'
import Menubar from '../Components/MenuBar'
import Flexbox from 'flexbox-react'

const PageLayout = ({children}) => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">
      <Menubar/>
      {children}
    </Flexbox>
  )
}

export default PageLayout;
