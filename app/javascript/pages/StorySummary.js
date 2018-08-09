import React from 'react'
import { Link } from 'react-router'

import storyInfo from '../constants/StoryInfo'
import StoryList from '../containers/StoryList'

const StorySummary = props => {
  const storyIntro = storyInfo.allPageIntro.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>
  })

  const submitButton =
    <div className='center'>
      <Link to='/stories/new'>
        <button className='button'>
            Submit a Story
        </button>
      </Link>
    </div>

  return(
    <div>
      <h1 className='heading'>Stories from Friends and Family</h1>
      <h3 className='title'>Have a story to share?</h3>
      {storyIntro}
      {submitButton}
      <h3 className='title'>Shared Stories</h3>
      <StoryList />
    </div>
  )
}

export default StorySummary
