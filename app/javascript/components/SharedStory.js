import React from 'react'

const SharedStory = props => {
  return(
    <div className='shared-story'>
      {props.story.body}
      <div className='submitter'>- {props.story.submitter}</div>
    </div>
  )
}

export default SharedStory
