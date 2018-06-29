import React from 'react'
import Flexbox from 'flexbox-react'

class Schedule extends React.Component {
  render() {
    return(
      <Flexbox flexDirection='column' >
        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Mon.
          </Flexbox>
          <Flexbox style={{alignSelf:'right'}}>
            9:00 am - 6:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Tues.
          </Flexbox>
          <Flexbox>
            9:00 am - 6:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Wed.
          </Flexbox>
          <Flexbox>
            9:00 am - 6:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Thur.
          </Flexbox>
          <Flexbox>
            9:00 am - 6:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Fri.
          </Flexbox>
          <Flexbox>
            9:00 am - 6:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Sat.
          </Flexbox>
          <Flexbox>
            9:00 am - 2:00 pm
          </Flexbox>
        </Flexbox>

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox >
            Sun.
          </Flexbox>
          <Flexbox>
            Closed
          </Flexbox>
        </Flexbox>

      </Flexbox>
    )
  }
}

export default Schedule