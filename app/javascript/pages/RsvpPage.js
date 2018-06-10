import React, {Component} from 'react'
import RsvpForm from '../containers/RsvpForm'

class RsvpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteId: parseInt(this.props.params.id),
      rsvps: [],
      errorMessage: null
    }
    this.fetchInvite = this.fetchInvite.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)


    this.handlePlusOneChange = this.handlePlusOneChange.bind(this)
    this.handleBoxSelect = this.handleBoxSelect.bind(this)
  }

  componentDidMount() {
    const inviteId = parseInt(this.props.params.id)
    this.fetchInvite(inviteId)
  }

  fetchInvite(id) {

    // FOR WORK PURPOSES:
    id = 1


    fetch(`/api/v1/invites/${id}.json`, {
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
        if (response["error"]) {
          this.setState({ errorMessage: response["message"] })
        } else {
          this.setState({ rsvps: response })
        }
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  handleTextChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    })
  }

  handleBoxSelect(attendee) {
    // does not handle for PlusOnes
    let newRsvps = this.state.rsvps
    newRsvps.forEach((rsvp) => {
      if (rsvp.full_name === attendee.name) {
        rsvp.is_attending = attendee.isAttending
      }
    })

    this.setState({ rsvps: newRsvps })
  }

  // COPIED DIRECTLY:
  handlePlusOneChange(event) {
    debugger
    let plusOneName = event.target.value
    let plusOneAttending = this.state.familyObject["plusOne"].attending

    this.setState({
      familyObject: {
        ...this.state.familyObject,
        "plusOne": {
          name: plusOneName,
          attending: plusOneAttending
        }
      }
    })
  }

  render() {
    console.log(this.state)


    return(
      <RsvpForm
        rsvps={this.state.rsvps}
        handlePlusOneChange={this.handlePlusOneChange}
        handleSubmit={this.handleRSVPSubmit}
        onBoxClick={this.handleBoxSelect}
        onChange={this.handleTextChange}
      />
    )
  }
}

export default RsvpPage
