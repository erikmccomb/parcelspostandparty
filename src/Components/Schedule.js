import React from 'react'
import Flexbox from 'flexbox-react'

class Schedule extends React.Component {
  render() {
    return(
      <Flexbox alignContent='center' justifyContent='center'>
        <table>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Mon.
            </td>
            <td>
            9:00 am - 6:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Tues.
            </td>
            <td>
            9:00 am - 6:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Wed.
            </td>
            <td>
            9:00 am - 6:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Thur.
            </td>
            <td>
            9:00 am - 6:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Fri.
            </td>
            <td>
            9:00 am - 6:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Sat.
            </td>
            <td>
            9:00 am - 2:00 pm
            </td>
          </tr>
          <tr>
            <td style={{padding:'0px 10px 0px 0px'}}>
            Sun.
            </td>
            <td style={{textAlign:'center'}}>
            Closed
            </td>
          </tr>
        </table>
      </Flexbox>
    )
  }
}

export default Schedule