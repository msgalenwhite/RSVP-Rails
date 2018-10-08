import React from 'react'
import { Link } from 'react-router'

import Story from '../components/Story'
import StoryInProgress from '../components/StoryInProgress'
import TextInputField from '../components/TextInputField'
import StoryInfo from '../constants/StoryInfo'

const StoryForm = props => {
  const storyIntro = StoryInfo.sharePageIntro.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>
  })

  const submitButton =
    <div className='center'>
      <button
        className='button'
        onClick={props.handleFullSubmit}
      >
        Submit Stories
      </button>
    </div>

  const continueButton =
    <div className='center'>
      <p>{props.finalMessage}</p>
      <Link to='/stories/all'>
        <button className='button'>
          Take me to the stories!
        </button>
      </Link>
    </div>

  const button = props.finalMessage ? continueButton : submitButton

  let stories = [
    <h3 className='title center' key='alert'>{props.alertMessage}</h3>,
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
      <div className="storyIntro">
        {storyIntro}
      </div>
      {stories}
      <div className='name-div'>
        <span className='name-span'>
          <TextInputField
            name='submitter'
            label='Your Name: '
            value={props.submitter}
            onChange={props.handleTextChange}
          />
        </span>
        <span className='name-span'>
          <TextInputField
            name='email'
            label='Email: '
            value={props.email}
            onChange={props.handleTextChange}
          />
        </span>
      </div>
      {button}
    </div>
  )
}

export default StoryForm
