import React, {Component} from 'react'

import StoryForm from '../containers/StoryForm'
import TextInputField from '../components/TextInputField'

class ShareStories extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: {
        current: '',
        saved: []
      },
      email: '',
      alertMessage: ''
    }
    this.handleEditStory = this.handleEditStory.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleStorySubmit = this.handleStorySubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.resetStory = this.resetStory.bind(this)
    this.storyInProgress = this.storyInProgress.bind(this)
  }

  handleTextChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  handleStoryChange(event) {
    this.setState({
      stories: {
        ...this.state.stories,
        current: event.target.value
      }
    })
  }

  handleStorySubmit() {
    let newStory = this.state.stories.current
    let allStories = this.state.stories.saved

    if (newStory !== "") {
      allStories.push(newStory)
      this.setState({
        stories: {
          current: "",
          saved: allStories
        }
      })
    }
  }

  storyInProgress() {
    if (this.state.stories.current === "") {
      return false
    }
    return true;
  }

  resetStory(index) {
    let storyObject = this.state.stories
    let targetStory = storyObject.saved[index]
    storyObject.saved.splice(index, 1)
    storyObject.current = targetStory

    this.setState({
      stories: storyObject
    })
  }

  handleEditStory(index) {
    if (this.storyInProgress()) {
      /*
      ////have alert appear?
      //have div appear?
      "It looks like you are in the middle of a story.  If you continue, this story will be lost.  Do you wish to continue or return to your current story?"

        - need 2 buttons:
          - return to story
            - makes div disappear, nothing else changes
          - continue
            - see num 2
      */
    } else {
      this.resetStory(index)
    }
  }

  render() {
    return(
      <div>
        <h1 className='heading'>Bride and Groom Stories</h1>
        <StoryForm
          stories={this.state.stories}
          onChange={this.handleStoryChange}
          handleStorySubmit={this.handleStorySubmit}
          handleEditStory={this.handleEditStory}
          alertMessage={this.state.alertMessage}
        />
        <TextInputField
          name='email'
          label='Email: '
          value={this.state.email}
          onChange={this.state.handleTextChange}
        />
        <button
          className='button'
          onClick={this.handleFullSubmit}
        >
          Submit Stories
        </button>
      </div>
    )
  }
}

export default ShareStories
