import React, {Component} from 'react'

import StoryForm from '../containers/StoryForm'

class ShareStories extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: {
        current: '',
        saved: []
      },
      email: '',
      submitter: '',
      alertMessage: '',
      finalMessage: ''
    }
    this.formIsComplete = this.formIsComplete.bind(this);
    this.handleEditStory = this.handleEditStory.bind(this);
    this.handleFullSubmit = this.handleFullSubmit.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleStorySubmit = this.handleStorySubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.resetStory = this.resetStory.bind(this);
    this.sendStories = this.sendStories.bind(this);
    this.storyInProgress = this.storyInProgress.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      alertMessage: '',
      [event.target.className]: event.target.value
    })
  }

  handleStoryChange(event) {
    this.setState({
      alertMessage: '',
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
      this.setState({
        alertMessage: "Please complete your current story before editing any others."
      })
    } else {
      this.setState({alertMessage: ''})
      this.resetStory(index)
    }
  }

  sendStories(formPayload) {
    fetch("/api/v1/stories/new.json", {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then ( response => {
      if ( response.ok ) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then ( response => response.json() )
    .then ( response => {
      this.setState({
        finalMessage: `Thank you, ${response["name"]}. Your ${response["numStories"]} stories were submitted successfully.  You may continue to enter stories here, or click below to see all of the stories which have been submitted so far.`,
        stories: {
          current: '',
          saved: []
        },
        alertMessage: ''
      })
    })
    .catch ( error => {
      console.error(`Error in fetch: ${error.message}`)
    })
  }

  formIsComplete() {
    return (
      this.fieldIsComplete(this.state.stories.saved) &&
      this.fieldIsComplete(this.state.submitter)
    )
  }

  fieldIsComplete(field) {
    return (field.length === 0) ? false : true
  }

  handleFullSubmit() {
    if (this.storyInProgress()) {
      this.setState({
        alertMessage: "Please click 'Add Story' before submitting the form."
      })
    } else if (!this.formIsComplete()) {
      this.setState({
        alertMessage: "Please fill in a story and include your name."
      })
    } else {
      this.setState({ alertMessage: '' })
      const formPayload = {
        stories: this.state.stories.saved,
        email: this.state.email,
        submitter: this.state.submitter
      }
      this.sendStories(formPayload)
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
          email={this.state.email}
          submitter={this.state.submitter}
          handleFullSubmit={this.handleFullSubmit}
          handleTextChange={this.handleTextChange}
          finalMessage={this.state.finalMessage}
        />
      </div>
    )
  }
}

export default ShareStories
