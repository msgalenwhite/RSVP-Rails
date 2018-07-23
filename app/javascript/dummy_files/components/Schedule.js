import React from 'react'
import ReturnButton from './ReturnButton'

const Schedule = props => {

  const satEvents = [
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
      time: "6:00 pm",
      happening: "Toasts and Dinner"
    },
    {
      time: "7:15 pm",
      happening: "PARTY TIME!"
    },
    {
      time: "10:00 pm",
      happening: "Quiet Hours Begin"
    }
  ]

  const eventsForTable = satEvents.map((eventObject) => {
    return (
      <tr key={`${eventObject.time} - ${eventObject.happening}`}>
        <td>{eventObject.time}</td>
        <td>{eventObject.happening}</td>
      </tr>
    )
  })

  return(
    <div>
      <h1 className='heading'>Weekend Schedule</h1>
      <h3 className='title'>October 13th (Saturday)</h3>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {eventsForTable}
        </tbody>
      </table>

      <ReturnButton />
    </div>
  )
}

export default Schedule
