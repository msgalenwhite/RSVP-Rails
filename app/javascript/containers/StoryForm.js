import React from 'react'

import Story from '../components/Story'
import StoryInProgress from '../components/StoryInProgress'

const StoryForm = props => {
  const alertMessageTag =
    <h3 className='title'>{props.alertMessage}</h3>

  const storyIntro =
    <div className="storyIntro">
      <p>Do you have an embarrassing story of the Bride or Groom that you think would make an excellent wedding toast?</p>
      <p>Please, share it here instead.  We would like to keep our wedding a positive experience for all, and ask that all toasts or stories shared at the wedding be heart-felt or comical without embarrassing the Bride or Groom and ruining their experience.</p>
    </div>

  let stories = [
    <StoryInProgress
      key='storyInProgress'
      storyText={props.stories.current}
      onChange={props.onChange}
      onClick={props.handleStorySubmit}
    />
  ]

  props.stories.saved.forEach((story, index) => {
    let key = `story-${index}`
    let uniqueStoryEdit = () => {
      props.handleEditStory(index)
    }
    stories.push(
      <Story
        key={key}
        storyText={story}
        handleEditStory={uniqueStoryEdit}
      />
    )
  })
  return(
    <div>
      {storyIntro}
      {stories}
    </div>
  )
}

export default StoryForm
