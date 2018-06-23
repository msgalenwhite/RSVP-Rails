import React, {Component} from 'react'
import RsvpForm from '../containers/RsvpForm'
import RsvpSummary from '../containers/RsvpSummary'

class RsvpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteId: parseInt(this.props.params.id),
      rsvps: [],
      plusOneName: '',
      dietaryRestrictions: '',
      showReview: false,
      errorMessage: null
    }
    this.createPayload = this.createPayload.bind(this)
    this.fetchInvite = this.fetchInvite.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.showReview = this.showReview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // this.handlePlusOneChange = this.handlePlusOneChange.bind(this)
    this.handleBoxSelect = this.handleBoxSelect.bind(this)
  }

  componentDidMount() {
    const inviteId = parseInt(this.props.params.id)
    this.fetchInvite(inviteId)
  }

  createPayload() {
    const payload = {
      rsvps: this.state.rsvps,
      dietary_restrictions: this.state.dietaryRestrictions
    }
    return payload
  }

  fetchInvite(id) {

    // FOR WORK PURPOSES:
    id = 2

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

  handleSubmit() {
    const formPayload = this.createPayload()

    fetch(`/api/v1/invites/${this.state.inviteId}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
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

  // COPIED DIRECTLY:
  // handlePlusOneChange(event) {
  //   debugger
  //   let plusOneName = event.target.value
  //   let plusOneAttending = this.state.familyObject["plusOne"].attending
  //
  //   this.setState({
  //     familyObject: {
  //       ...this.state.familyObject,
  //       "plusOne": {
  //         name: plusOneName,
  //         attending: plusOneAttending
  //       }
  //     }
  //   })
  // }

  showReview() {
    this.setState({ showReview: !this.state.showReview })
  }

  render() {
    console.log(this.state)

    let renderedComponent;
    if (this.state.showReview) {
      renderedComponent =
        <RsvpSummary
          rsvps={this.state.rsvps}
          changeRSVP={this.showReview}
          dietaryRestrictions={this.state.dietaryRestrictions}
          handleSubmit={this.handleSubmit}
        />
    } else {
      renderedComponent =
        <RsvpForm
          rsvps={this.state.rsvps}
          handlePlusOneChange={this.handlePlusOneChange}
          handleSubmit={this.showReview}
          onBoxClick={this.handleBoxSelect}
          onChange={this.handleTextChange}
          plusOneName={this.state.plusOneName}
          showReview={this.showReview}
          dietaryRestrictions={this.state.dietaryRestrictions}
        />
    }

    return(
      <div>
        {renderedComponent}
      </div>
    )
  }
}

export default RsvpPage
