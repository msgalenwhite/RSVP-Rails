import React from 'react'
import {Link} from 'react-router'

const WhereTo = props => {
  const importantToDo = [
    {
      path: '/wedding/rsvp',
      text: 'Make an RSVP',
      emphasis: true
    },
    {
      path: '/wedding/schedule',
      text: 'On the Day Schedule',
      emphasis: true
    }
  ]

  const likeToDo = [
    {
      path: '/stories/new',
      text: 'Submit a Story'
    },
    {
      path: '/wedding/invitation',
      text: 'View the Invitation'
    },
    {
      path: '/wedding/location',
      text: 'Get Location information'
    },
    {
      path: '/wedding/transportation',
      text: 'Travel Tips'
    },
    {
      path: '/wedding/registry',
      text: 'View the Registry',
      aTag: true
    },
    // {
    //   path: '/wedding/weather',
    //   text: 'October Weather'
    // },
    {
      path: '/wedding/coolsite',
      text: 'What a cool site!'
    }
  ]

  const importantList = importantToDo.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>
          {item.text}
        </Link>
      </li>
    )
  })

  const initialList = likeToDo.map((item) => {
    let returnedItem;

    if (item.aTag) {
      returnedItem =
        <li key={item.path}>
          <a href={item.path}>
            {item.text}
          </a>
        </li>
    } else {
      returnedItem =
        <li key={item.path}>
          <Link to={item.path}>
            {item.text}
          </Link>
        </li>
    }
    return(
      returnedItem
    )
  })

  const comingSoon = [
    "See Stories that Friends/Family have Shared",
    "Rehearsal Dinner Information",
    "New England Weather in October"
  ]

  const soonList = comingSoon.map((item) => {
    return (
      <li key={item} className='coming-soon-link'>{item}</li>
    )
  })

  return(
    <div className='whereToPage'>
      <div className='title center date'>October 13, 2018</div>
      <h3 className='heading'>
        Galen and Chris are Getting Married!
      </h3>
      <h3 className='title'>
        Attendee Information
      </h3>
      <ul>
        {importantList}
      </ul>
      <h3 className='title'>
        Good to Know
      </h3>
      <ul>
        {initialList}
      </ul>
      <h3 className='title'>Coming Soon</h3>
      <ul>
        {soonList}
      </ul>
    </div>
  )
}

export default WhereTo
