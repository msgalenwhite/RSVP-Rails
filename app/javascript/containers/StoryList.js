import React, {Component} from 'react'

import SharedStory from '../components/SharedStory'

class StoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
      finalPage: null,
      stories: []
    }
    this.changePage = this.changePage.bind(this)
    this.makeStories = this.makeStories.bind(this)
    this.generateButtons = this.generateButtons.bind(this)
    this.getStories = this.getStories.bind(this)
  }

  componentDidMount() {
    this.getStories(1)
  }

  changePage(change) {
    const newPage = this.state.currentPage + change
    this.getStories(newPage)
  }

  generateButtons() {
    const goForward = () => { this.changePage(1) }
    const goBack = () => { this.changePage(-1) }

    let forwardClass = this.state.currentPage === this.state.finalPage ? 'hide-button' : ''
    let backClass = this.state.currentPage === 1 ? 'hide-button' : ''

    const buttons = [
      <button onClick={goBack} className={`button ${backClass}`} key='prev-button'>Previous</button>,
      <span className='text-even-with-button'>{`Page ${this.state.currentPage} of ${this.state.finalPage}`}</span>,
      <button onClick={goForward} className={`button ${forwardClass}`} key='next-button'>Next</button>
    ]

    return <div className='story-button-div'>{buttons}</div>
  }

  getStories(pageNum) {
    fetch(`/api/v1/stories/index/${pageNum}.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        const finalPage = Math.ceil(response.numStories/5)
        this.setState({
          stories: response.stories,
          currentPage: pageNum,
          finalPage: finalPage
        })
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  makeStories() {
    return this.state.stories.map((story) => {
      return <SharedStory story={story} key={story.id}/>
    })
  }

  render() {
    console.log(this.state)
    const buttonDiv = this.generateButtons()
    const stories = this.makeStories()

    return(
      <div>
        {stories}
        {buttonDiv}
      </div>
    )
  }
}

export default StoryList
