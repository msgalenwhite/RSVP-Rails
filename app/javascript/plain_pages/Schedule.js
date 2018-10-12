import React from 'react'
import ReturnButton from './ReturnButton'

const Schedule = props => {

  const events = [
    {
      time: "1:30 pm",
      happening: "Family Photos Start"
    },
    {
      time: "3:30 pm",
      happening: "Ceremony Starts"
    },
    {
      time: "4:00 pm",
      happening: "Cocktail Hour"
    },
    {
      time: "5:00 pm",
      happening: "Galen and Chris's First Dance"
    },
    {
      time: "5:30 pm",
      happening: "Toasts and Dinner"
    },
    {
      time: "7:15 pm",
      happening: "PARTY TIME!"
    },
    {
      time: "10:00 pm",
      happening: "DJ's music has to stop, but the party can continue!"
    }
  ]

  const eventsForTable = events.map((eventObject) => {
    return (
      <tr key={`${eventObject.time} - ${eventObject.happening}`}>
        <td className='table-text'>{eventObject.time}</td>
        <td className='table-text'>{eventObject.happening}</td>
      </tr>
    )
  })

  return(
    <div>
      <h1 className='heading'>Weekend Schedule</h1>
      <h3 className='title'>October 13th (Saturday)</h3>

      <div className='table-div'>
        <table>
          <thead>
            <tr>
              <th className='table-header title'>Time</th>
              <th className='table-header title'>Event</th>
            </tr>
          </thead>
          <tbody>
            {eventsForTable}
          </tbody>
        </table>
      </div>

      <ReturnButton />
    </div>
  )
}

export default Schedule