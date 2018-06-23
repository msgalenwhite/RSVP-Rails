import React, {Component} from 'react'
import RsvpForm from '../containers/RsvpForm'
import RsvpSummary from '../containers/RsvpSummary'

class RsvpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteId: parseInt(this.props.params.id),
      rsvps: [],
      plusOneBoolean: null,
      babyBoolean: null,
      plusOneName: '',
      dietaryRestrictions: '',
      showReview: false,
      errorMessage: null
    }
    this.createPayload = this.createPayload.bind(this)
    this.createPlusOne = this.createPlusOne.bind(this)
    this.fetchInvite = this.fetchInvite.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.showReview = this.showReview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBoxSelect = this.handleBoxSelect.bind(this)
  }

  componentDidMount() {
    let inviteId = parseInt(this.props.params.id)

    // JUST FOR TESTING
    inviteId = 3


    this.fetchInvite(inviteId)
  }

  createPayload() {
    const payload = {
      rsvps: this.state.rsvps,
      dietary_restrictions: this.state.dietaryRestrictions
    }
    return payload
  }

  createPlusOne() {
    const plusOne = {
      full_name: 'plusOne',
      is_attending: false
    }
    return plusOne
  }

  fetchInvite(id) {

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
          let rsvp_array = response.rsvps
          if (response.plus_one) {
            rsvp_array = rsvp_array.concat(this.createPlusOne())
          }
          this.setState({
            rsvps: rsvp_array,
            plusOneBoolean: response.plus_one,
            babyBoolean: response.baby
          })
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
    debugger
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
          plusOneBoolean={this.state.plusOneBoolean}
          babyBoolean={this.state.babyBoolean}
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
