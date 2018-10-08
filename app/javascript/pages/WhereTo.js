import React from 'react'
import {Link} from 'react-router'

import linkPaths from '../constants/LinkPaths'

const WhereTo = props => {
  const importantList = linkPaths.importantToDo.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>
          {item.text}
        </Link>
      </li>
    )
  })

  const initialList = linkPaths.likeToDo.map((item) => {
    return(
      <li key={item.path}>
        <Link to={item.path}>
          {item.text}
        </Link>
      </li>
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
    </div>
  )
}

export default WhereTo
