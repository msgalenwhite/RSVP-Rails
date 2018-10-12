import React from 'react'
import ReturnButton from './ReturnButton'
import scheduleInfo from '../constants/ScheduleInfo'

const Schedule = props => {
  const eventsList = []
  for (var day in scheduleInfo) {
    eventsList.push(<h3 className='title' key={day}>{day}</h3>)
    scheduleInfo[day].forEach((eventName) => {
      eventsList.push(<p key={`event-${eventName}`}>{eventName}</p>)
    })
  }

  return(
    <div>
      <h1 className='heading'>Weekend Schedule</h1>
      {eventsList}
      <ReturnButton />
    </div>
  )
}

export default Schedule
